import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const themes = {
	light: 'light',
	dim: 'dim',
};

const getThemeFromLocalStorage = () => {
	return localStorage.getItem('theme') || themes.light;
};

const Navbar = () => {
	const [theme, setTheme] = useState(getThemeFromLocalStorage());

	const handleTheme = () => {
		const { light, dim } = themes;
		const newTheme = theme === light ? dim : light;
		document.documentElement.setAttribute('data-theme', theme);
		setTheme(newTheme);
	};
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

	return (
		<nav className='bg-base-300 shadow shadow-slate-500'>
			<div className='navbar align-element '>
				<div className='navbar-start'>
					{/* Title */}
					<NavLink to='/' className='hidden lg:flex  text-3xl items-center '>
						<h4 className='text-xl capitalize'>daisy</h4>
						<span className='text-secondary italic uppercase ml-2'>store</span>
					</NavLink>
					{/* DROPDOWN */}
					<div className='dropdown opacity-95'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<FaBarsStaggered className='h-6 w-6' />
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal '>
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end'>
					{/* CART LINK*/}
					<NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
						<div className='indicator'>
							<BsCart3 className='h-6 w-6' />
							<span className='badge badge-sm badge-secondary indicator-item'>
								{numItemsInCart}
							</span>
						</div>
					</NavLink>
					{/* THEME ICONS */}
					<label className='swap swap-rotate ml-4'>
						<input type='checkbox' onChange={handleTheme} />
						<BsSunFill className='swap-off mx-4 h-4 w-4 opacity-50' />
						<BsMoonFill className='swap-on mx-4 h-4 w-4 ' />
					</label>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
