import axios from 'axios';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

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
			<FeaturedProducts />
		</>
	);
};
export default Landing;
