import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};

const getCartFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: getCartFromLocalStorage,
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find(
				(index) => index.cartID === product.cartID
			);
			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart += product.amount;
			state.cartTotal += product.price * product.amount;
			state.tax = 0.13 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;

			localStorage.setItem('cart', JSON.stringify(state));

			toast.success('Item added to cart');
		},
		removeItem: (state, action) => {
			console.log(action.payload);
		},
		editItem: (state, action) => {
			console.log(action.payload);
		},
		clearItem: (state) => {
			console.log(state);
		},
	},
});

export const { addItem, removeItem, editItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
