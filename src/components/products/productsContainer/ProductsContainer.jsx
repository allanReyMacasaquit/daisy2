import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductsContainer = () => {
	const { meta } = useLoaderData();
	const totalProducts = meta.pagination.total;
	const [layout, setLayout] = useState('grid');

	const setActiveStyles = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${
			pattern === layout ? 'btn btn-secondary' : 'btn'
		}`;
	};
	return (
		<>
			{/* HEADER */}
			<div className='flex justify-between  items-center mt-8 border-b border-base-300 pb-5'>
				<h4 className='font-medium text-sm '>
					{totalProducts} product{totalProducts > 1 && 's'}
				</h4>
				<div className='flex gap-x-2'>
					<button
						onClick={() => setLayout('grid')}
						type='button'
						className={setActiveStyles('grid')}
					>
						<BsFillGridFill />
					</button>
					<button
						onClick={() => setLayout('list')}
						type='button'
						className={setActiveStyles('list')}
					>
						<BsList />
					</button>
				</div>
			</div>
			{/* PRODUCTS */}
			<div>
				{totalProducts === 0 ? (
					<h5 className='text-2xl mt-16'>
						Sorry, no products matched your search...
					</h5>
				) : layout === 'grid' ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};
export default ProductsContainer;
