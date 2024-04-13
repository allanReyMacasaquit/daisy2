import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';
import login from '../assets/login.png';
import checkout from '../assets/checkout.png';
const Cart = () => {
	const user = null;
	const { numItemsInCart } = useSelector(
		(state) => state.cartState.numItemsInCart
	);
	if (numItemsInCart === 0) {
		return <SectionTitle text='Your cart is empty' />;
	}

	return (
		<>
			<SectionTitle text='Shopping Cart' />
			<div className='mt-8 grid gap-8 lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
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
