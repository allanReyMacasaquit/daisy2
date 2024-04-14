import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';
import login from '../assets/login.png';
import checkout from '../assets/checkout.png';
import EmptyCart from '../assets/empty-cart.png';
const Cart = () => {
	const user = null;
	const { numItemsInCart } = useSelector((state) => state.cartState);
	if (numItemsInCart === 0) {
		return (
			<>
				<div className='hover:bg-base-300 rounded-lg hover:shadow-lg hover:shadow-slate-500'>
					<Link to='/products'>
						<SectionTitle text='Continue Shopping' />
					</Link>
				</div>

				<div className='flex flex-col justify-center items-center'>
					<img
						src={EmptyCart}
						alt='Empty-cart'
						className=' items-center h-[50vh] w-[50vh]'
					/>
					<SectionTitle text='Opps! Cart is empty' />
				</div>
			</>
		);
	}

	return (
		<>
			<SectionTitle text='Shopping Cart' />

			<div className='mt-8 grid gap-8 lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
					<div className='flex justify-center sm:hidden'>
						<hr className='bg-slate-500 w-[45%]  mt-8' />
					</div>
				</div>
				<div className='lg:col-span-4'>
					<CartTotals />
					{user ? (
						<Link
							to='/checkout'
							className='btn btn-primary btn-block mt-8 tracking-wider'
						>
							<img src={checkout} alt='checkout' className='h-8' />
							Checkout
						</Link>
					) : (
						<Link
							to='/login'
							className='btn btn-primary btn-block mt-8 capitalize tracking-wider'
						>
							<img src={login} alt='login' className='h-7' /> login
						</Link>
					)}
				</div>
			</div>
		</>
	);
};
export default Cart;
