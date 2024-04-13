import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils';

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		(state) => state.cartState
	);
	const carts = {
		cartTotal,
		shipping,
		tax,
		orderTotal,
	};

	return (
		<div className='card bg-base-300 capitalize'>
			<div className='card-body '>
				{Object.keys(carts).map((key) => (
					<p key={key} className='flex justify-between pb-2'>
						<span>{key}</span>
						<span className='font-medium tracking-widest'>
							{formatPrice(carts[key])}
						</span>
					</p>
				))}
			</div>
		</div>
	);
};
export default CartTotals;
