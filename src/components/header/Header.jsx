import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className=' py-2  '>
			<div className='align-element flex justify-center sm:justify-end '>
				{/* USER */}
				{/* LINKS */}
				<div className='flex gap-x-6 justify-center items-center border rounded-md shadow p-1 shadow-slate-500'>
					<Link to='/login' className='header-link'>
						Sign in / Guest
					</Link>
					<Link to='/register' className='header-link'>
						Create an Account
					</Link>
				</div>
			</div>
		</header>
	);
};
export default Header;
