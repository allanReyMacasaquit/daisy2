import { useState } from 'react';
import { customFetch, formatPrice, generateAmountOptions } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

export const loader = async ({ params }) => {
	const response = await customFetch(`/products/${params.id}`);

	return { singleProduct: response.data.data };
};

const SingleProduct = () => {
	const { singleProduct } = useLoaderData();
	const { image, title, price, description, colors, company } =
		singleProduct.attributes;
	const dollarsAmount = formatPrice(price);
	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const handleAmount = (e) => {
		setAmount(parseInt(e.target.value));
	};

	return (
		<section>
			<div className='text-md breadcrumbs -mt-10'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
				</ul>
			</div>
			{/* PRODUCT */}
			<div className='mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16'>
				{/* IMAGE */}
				<img
					src={image}
					alt={title}
					className='w-96 h-[100%] object-cover shadow-md shadow-slate-500 rounded-lg lg:w-full  '
				/>
				{/* PRODUCT INFO */}
				<div>
					<h1 className='capitalize text-3xl font-bold'>{title}</h1>
					<h4 className='text-xl text-neutral-content font-bold mt-2'>
						{company}
					</h4>

					<p className='mt-3 text-xl'>{dollarsAmount}</p>

					<p className='mt-6 leading-8'>{description}</p>

					{/* COLORS */}
					<div className='mt-6'>
						<h4 className='text-md font-medium tracking-wider capitalize'>
							colors
						</h4>
						<div className='mt-2'>
							{colors.map((color) => {
								return (
									<button
										key={color}
										type='button'
										className={`badge  w-6 h-6 mr-2  ${
											color === productColor &&
											'border-4 border-double border-slate-100'
										}`}
										style={{ backgroundColor: color }}
										onClick={() => setProductColor(color)}
									></button>
								);
							})}
						</div>
					</div>
					{/* AMOUNT */}
					<div className='form-control w-full max-w-xs lg:mt-6'>
						<label className='label'>
							<h4 className='text-md font-medium tracking-wider capitalize'>
								amount
							</h4>
						</label>
						<select
							className='select select-accent shadow-md shadow-slate-500 select-md'
							value={amount}
							onChange={handleAmount}
						>
							{generateAmountOptions(10)}
						</select>
					</div>
					{/* CART BUTTON */}
					<div className='mt-10 '>
						<button
							className='btn btn-secondary  lg:mt-6'
							onClick={() => console.log('add to bag')}
						>
							Add to bag
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SingleProduct;
