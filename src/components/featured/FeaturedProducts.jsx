import ProductsGrid from '../products/productsContainer/ProductsGrid';
import SectionTitle from '../products/SectionTitle';

export const loader = async () => {
	return null;
};
const FeaturedProducts = () => {
	return (
		<div className='pt-10 sm:pt-56 '>
			<SectionTitle text='featured products' />
			<ProductsGrid />
		</div>
	);
};
export default FeaturedProducts;
