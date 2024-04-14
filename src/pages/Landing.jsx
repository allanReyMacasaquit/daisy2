import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';
import About from './About';

const featuredUrl = '/products?featured=true';
export const loader = async () => {
	const response = await customFetch(featuredUrl);
	const products = response.data.data;
	// console.log(featuredProducts);
	return { products };
};
const Landing = () => {
	return (
		<>
			<Hero />
			<About />
			<FeaturedProducts />
		</>
	);
};
export default Landing;
