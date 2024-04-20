import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			const response = await customFetch.post('/auth/local', data);
			store.dispatch(loginUser(response.data));
			toast.success('Logged-in Successfully');
			return redirect('/');
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message || 'invalid credentials';

			toast.error(errorMessage);
			return null;
		}
	};

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginAsGuestUser = async () => {
		try {
			const response = await customFetch.post('/auth/local', {
				identifier: 'test@test.com',
				password: 'secret',
			});
			dispatch(loginUser(response.data));
			toast.success('Welcome Guest User');
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error('Please try later.');
		}
	};

	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='POST'
				className='card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4'
			>
				<h4 className='text-center text-3xl font-semibold'>Login</h4>
				<FormInput type='email' label='email' name='identifier' />
				<FormInput type='password' label='password' name='password' />
				<div className='mt-4'>
					<SubmitBtn text='Login' />
				</div>
				<button
					type='button'
					className='btn btn-accent btn-block capitalize '
					onClick={loginAsGuestUser}
				>
					guest user
				</button>
				<p className='text-center'>
					Not yet a member?
					<Link
						to='/register'
						className='hover:bg-base-100 link link-hover link-primary px-2 rounded-md ml-1'
					>
						Register
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Login;
