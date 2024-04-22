import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import { FormInput, Loading, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		const response = await customFetch.post('/auth/local/register', data);
		toast.success('Account created successfully');
		return redirect('/login');
	} catch (error) {
		const errorMessage =
			error?.response?.data?.error?.message || 'invalid credentials';

		toast.error(errorMessage);
		return null;
	}
};
const Register = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === 'loading';
	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='POST'
				className='card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4'
			>
				<h4 className='text-center text-3xl font-semibold'>Register</h4>
				<FormInput type='text' label='username' name='username' />
				<FormInput type='email' label='email' name='email' />
				<FormInput type='password' label='password' name='password' />
				<div className='mt-4'>
					{isPageLoading ? <Loading /> : <SubmitBtn text='Register' />}
				</div>

				<p className='text-center'>
					Already a member?
					<Link
						to='/login'
						className='hover:bg-base-100 link link-hover link-primary px-2 rounded-md ml-1'
					>
						Login
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Register;
