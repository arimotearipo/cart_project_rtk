import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";

// Received from Shop as prop
const Product = (prop) => {
	const dispatch = useDispatch();
	const itemlist = useSelector((state) => state.cart.item);

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div>
			<p>
				<b>Name:</b> {prop.item.name}
			</p>
			<p>
				<b>Price:</b> ${prop.item.price}
			</p>
			<p>
				<b>Description:</b> {prop.item.description}
			</p>
			<button type="button" onClick={() => handleAddItem(prop.item)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
