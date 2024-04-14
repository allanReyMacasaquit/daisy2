import { useDispatch } from 'react-redux';
import { formatPrice, generateAmountOptions } from '../../utils';
import { editItem, removeItem } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const removeItemFromTheCart = () => {
		dispatch(removeItem({ cartID }));
	};

	const handleAmount = (e) => {
		dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
	};

	const { cartID, title, price, image, amount, company, productColor } =
		cartItem;

	return (
		<div className='card bg-base-300 mb-4'>
			<article
				key={cartID}
				className='card-body flex flex-col sm:grid sm:grid-cols-4 flex-wrap'
			>
				<Link to={`/products/${cartID}`}>
					<img
						src={image}
						alt={title}
						className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
					/>
				</Link>

				<div className=' sm:w-48'>
					<h3 className='capitalize font-medium'>{title}</h3>

					<h4 className='mt-2 capitalize text-sm '>{company}</h4>

					<p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
						color :
						<span
							className='badge badge-sm'
							style={{ backgroundColor: productColor }}
						></span>
					</p>
				</div>
				<div className=''>
					<div className='form-control max-w-xs'>
						<label htmlFor='amount' className='label p-0'>
							<span className=''>Amount</span>
						</label>
						<select
							name='amount'
							id='amount'
							className='mt-2 select select-base select-bordered select-xs'
							value={amount}
							onChange={handleAmount}
						>
							{generateAmountOptions(amount + 5)}
						</select>
					</div>
				</div>
				<div className='sm:ml-16'>
					<p className='font-medium sm:ml-auto tracking-wider'>
						{formatPrice(price)}
					</p>
					{/* REMOVE */}
					<button
						className='mt-2 link link-secondary link-hover text-sm'
						onClick={removeItemFromTheCart}
					>
						remove
					</button>
				</div>
			</article>
		</div>
	);
};
export default CartItem;
