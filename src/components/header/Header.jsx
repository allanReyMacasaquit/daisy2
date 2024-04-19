import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/user/userSlice';
import { clearItem } from '../../features/cart/cartSlice';
import Profile from '../../assets/profile.png';
import Logout from '../../assets/logout.png';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userState.user);
	const handleLogout = () => {
		navigate('/');
		dispatch(clearItem());
		dispatch(logoutUser());
	};
	return (
		<header className=' py-2  '>
			<div className='align-element flex justify-evenly sm:justify-end '>
				{user ? (
					<div className='flex gap-2 items-center '>
						<img src={Profile} alt='profile image' className='w-8' />
						<p className='text-xs sm:text-sm mr-6'>{user.username}</p>
						<button className='flex items-center gap-1' onClick={handleLogout}>
							<img
								src={Logout}
								alt='profile image'
								className='w-8 shadow shadow-slate-500 hover:p-[.99px] rounded-full hover:shadow-slate-700 hover:bg-slate-200'
							/>
							<a className='uppercase text-xs'>logout</a>
						</button>
					</div>
				) : (
					<div className='flex gap-x-6 justify-center items-center p-[5.99px] shadow-slate-500'>
						<Link to='/login' className='header-link'>
							Sign in / Guest
						</Link>
						<Link to='/register' className='header-link'>
							Create an Account
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};
export default Header;
