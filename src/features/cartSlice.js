import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	item: [],
	grandTotal: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const alreadyExists = state.item.findIndex(
				(i) => i.id === action.payload.id
			);
			if (alreadyExists !== -1) return;
			state.item.push(action.payload);
		},
		updateQty: (state, action) => {
			const { id, change } = action.payload;
			const itemIdx = state.item.findIndex((i) => i.id === id);
			if (state.item[itemIdx].amount <= 1 && change === -1) return;
			state.item[itemIdx].amount += change;
		},
		removeItem: (state, action) => {
			state.item = state.item.filter((i) => i.id !== action.payload);
		},
		getTotalAmount: (state) => {
			let sum = 0;
			state.item.map((i) => (sum = sum + i.price * i.amount));
			state.grandTotal = sum;
		},
	},
});

const { actions, reducer } = cartSlice;
export const { addItem, updateQty, removeItem, getTotalAmount } = actions;
export { reducer };
