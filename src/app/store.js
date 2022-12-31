import { configureStore } from "@reduxjs/toolkit";
import { reducer as navbarReducer } from "../features/navbarSlice";
import { reducer as cartReducer } from "../features/cartSlice";

const store = configureStore({
	reducer: {
		navbar: navbarReducer,
		cart: cartReducer,
	},
});

export default store;
