import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};
const cartSlice = createSlice({
	name: 'cart',
	initialState: defaultState,
	reducers: {
		addItem: (state, action) => {
			console.log(action.payload);
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
