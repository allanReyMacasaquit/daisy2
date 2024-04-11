import ProductsGrid from '../products/productsContainer/ProductsGrid';
import SectionTitle from '../products/SectionTitle';

export const loader = async () => {
	return null;
};
const FeaturedProducts = () => {
	return (
		<div className='pt-24 '>
			<SectionTitle text='featured products' />
			<ProductsGrid />
		</div>
	);
};
export default FeaturedProducts;
