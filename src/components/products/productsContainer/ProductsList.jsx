import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../../../utils';

const ProductsList = () => {
	const { products } = useLoaderData();
	return (
		<div className='mt-12 grid  gap-y-4 '>
			{products.map((product) => {
				const { title, price, image, company } = product.attributes;
				const dollarsAmount = formatPrice(price);
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className='p-4 rounded-2xl shadow shadow-slate-500  flex flex-col sm:flex-row gap-y-8 flex-wrap bg-base-100 hover:shadow-2xl duration-300 group '
					>
						<figure className=''>
							<img
								src={image}
								alt={title}
								className='h-64 w-80 rounded-xl sm:h-64 sm:w-80 object-cover group-hover:scale-105 transition duration-300'
							/>
						</figure>
						<div className='ml-0 sm:ml-16'>
							<h3 className='capitalize font-medium text-xl'>{title}</h3>
							<h4 className='capitalize text-md'>{company}</h4>

							{/* COLOR */}
						</div>

						<p className='font-medium ml-0 sm:ml-auto text-lg'>
							{dollarsAmount}
						</p>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsList;
