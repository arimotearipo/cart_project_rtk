import React from "react";
import { useDispatch } from "react-redux";
import { showCart, showShop } from "../features/navbarSlice";

const Navbar = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				className="button-54"
				onClick={() => {
					dispatch(showShop());
				}}
			>
				Shop
			</button>
			<button
				className="button-54"
				onClick={() => {
					dispatch(showCart());
				}}
			>
				Cart
			</button>
		</div>
	);
};

export default Navbar;
