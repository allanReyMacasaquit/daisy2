import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
	light: 'light',
	dim: 'dim',
};

const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem('theme') || themes.winter;
	document.documentElement.setAttribute('data-theme', theme);
	return theme;
};

const initialState = {
	user: { username: 'Allan' },
	theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log('login');
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.removeItem('user');
			toast.success('Logged out successfully');
		},
		toggleTheme: (state) => {
			const { dim, light } = themes;
			state.theme = state.theme === dim ? light : dim;
			document.documentElement.setAttribute('data-theme', state.theme);
			localStorage.setItem('theme', state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
