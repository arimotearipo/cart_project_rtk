import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showCart: false,
};

const navbarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		showCart: (state) => {
			state.showCart = true;
		},
		showShop: (state) => {
			state.showCart = false;
		},
	},
});

const { actions, reducer } = navbarSlice;
export const { showCart, showShop } = actions;
export { reducer };
