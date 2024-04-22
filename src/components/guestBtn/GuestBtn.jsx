import { useNavigate } from 'react-router-dom';

import { customFetch } from '../../utils';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';

const GuestBtn = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginAsGuestUser = async () => {
		setLoading(true);
		try {
			const response = await customFetch.post('/auth/local', {
				identifier: 'test@test.com',
				password: 'secret',
			});
			dispatch(loginUser(response.data));
			toast.success('Welcome Guest User');
			setLoading(false);
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error('Please try later.');
		}
	};

	return (
		<button
			disabled={loading}
			type='button'
			className='btn btn-accent btn-block capitalize '
			onClick={loginAsGuestUser}
		>
			{loading ? 'SUBMITTING...' : 'GUEST'}
		</button>
	);
};
export default GuestBtn;
