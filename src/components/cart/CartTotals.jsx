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
				{Object.keys(carts).map((item) => (
					<p key={item} className='flex justify-between pb-2 '>
						<span className='border-b border-slate-100'>{item}</span>
						<span className='font-medium tracking-widest border-b border-slate-100 '>
							{formatPrice(carts[item])}
						</span>
					</p>
				))}
			</div>
		</div>
	);
};
export default CartTotals;
