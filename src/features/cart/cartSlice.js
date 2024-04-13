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
				(item) => item.cartID === product.cartID
			);

			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}

			state.numItemsInCart += product.amount;
			state.cartTotal += product.price * product.amount;
			cartSlice.caseReducers.addedTaxValue(state);
			toast.success('Item added to cart');
		},
		removeItem: (state, action) => {
			const { cartID } = action.payload;
			const product = state.cartItems.find((index) => index.cartID === cartID);
			state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

			state.numItemsInCart -= product.amount;
			state.cartTotal -= product.price * product.amount;
			cartSlice.caseReducers.addedTaxValue(state);
			toast.error('Item removed from cart');
		},
		editItem: (state, action) => {
			const { amount, cartID } = action.payload;
			const item = state.cartItems.find((item) => item.cartID === cartID);

			state.numItemsInCart += amount - item.amount;
			state.cartTotal += item.price * (amount - item.amount);

			item.amount = amount;
			cartSlice.caseReducers.addedTaxValue(state);
			toast.success('Cart updated');
		},

		clearItem: () => {
			localStorage.setItem('cart', JSON.stringify(defaultState));
			return defaultState;
		},
		addedTaxValue: (state) => {
			state.tax = 0.13 * state.cartTotal;
			state.orderTotal = state.cartTotal + state.shipping + state.tax;

			localStorage.setItem('cart', JSON.stringify(state));
		},
	},
});

export const { addItem, removeItem, editItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
