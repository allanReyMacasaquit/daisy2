import { FeaturedProducts, Hero } from '../components';
import Footer from '../components/footer/Footer';
import { customFetch } from '../utils';
import AboutPage from './AboutPage';

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
			<AboutPage />
			<FeaturedProducts />
			<Footer />
		</>
	);
};
export default Landing;
