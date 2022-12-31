import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
	lst: [
		{ a: 1, b: 2, c: 3 },
		{ d: 4, e: 5, f: 6 },
	],
};

const testSlice = createSlice({
	name: "test",
	initialState,
	reducers: {
		changeTwo: (state) => {
			state.lst[0].a = 9;
		},
	},
});

const store = configureStore({
	reducer: {
		nottest: testSlice.reducer,
	},
});

const val = useSelector((state) => state.lst[0].a);
// const dispatch = useDispatch();
store.dispatch(changeTwo());

console.log("result", store);
