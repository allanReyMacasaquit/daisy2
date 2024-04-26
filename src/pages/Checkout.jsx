import { useSelector } from 'react-redux';
import { SectionTitle } from '../components';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { toast } from 'react-toastify';
import { Link, redirect } from 'react-router-dom';
import { clearItem } from '../features/cart/cartSlice';
import { customFetch, formatPrice } from '../utils';
import EmptyOrder from '../assets/order-empty.png';

export const loader = (store) => async () => {
	const user = store.getState().userState.user;

	if (!user) {
		toast.warn('You must be logged in to checkout');
		return redirect('/login');
	}
	return null;
};

export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);
		const user = store.getState().userState.user;
		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;

		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatPrice(orderTotal),
			cartItems,
			numItemsInCart,
		};
		try {
			await customFetch.post(
				'/orders',
				{ data: info },
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			store.dispatch(clearItem());
			toast.success('Order placed successfully');
			return redirect('/orders');
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				'there was an error placing your order';

			toast.error(errorMessage);
			return null;
		}
	};

const Checkout = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);
	if (cartTotal === 0) {
		return (
			<div>
				<div className='relative'>
					<img src={EmptyOrder} alt='EmptyOrder' className='h-90' />
					<span className='absolute top-9 lg:top-16 left-[90px] text-xl text-slate-900'>
						Empty Box
					</span>
				</div>

				<div className='hover:bg-base-300 rounded-lg mt-8 hover:shadow-lg hover:shadow-slate-500'>
					<Link to='/products'>
						<SectionTitle text='continue shopping'></SectionTitle>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<>
			<SectionTitle text='Order Now' />
			<div className='mt-8 lg:mt-20'>
				<div className='col-span-1'>
					<CheckoutForm />
				</div>
			</div>
		</>
	);
};
export default Checkout;
