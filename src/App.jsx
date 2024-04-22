import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	AboutPage,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from './pages';
import { ErrorElement } from './components';
import { loader as LandingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import { loader as CheckoutLoader } from './pages/Checkout';
import { loader as ProductsLoader } from './pages/Products';
import { action as RegisterAction } from './pages/Register';
import { action as LoginAction } from './pages/Login';
import { store } from './features/store/configureStore';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: LandingLoader,
			},
			{
				path: 'products',
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: ProductsLoader,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: SingleProductLoader,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
				loader: CheckoutLoader(store),
			},
			{
				path: 'orders',
				element: <Orders />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
		action: LoginAction(store),
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
		action: RegisterAction,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
