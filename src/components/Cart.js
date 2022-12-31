import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQty, removeItem, getTotalAmount } from "../features/cartSlice";

const Cart = () => {
	const item = useSelector((state) => state.cart.item);
	const totalAmount = useSelector((state) => state.cart.grandTotal);
	const dispatch = useDispatch();

	const handleUpdateQty = (payload) => {
		dispatch(updateQty(payload));
	};

	const handleRemove = (payload) => {
		dispatch(removeItem(payload));
	};

	const handleTotalAmount = () => {
		dispatch(getTotalAmount());
	};

	useEffect(() => {
		handleTotalAmount();
	});

	return (
		<div>
			{item.map((i) => (
				<div key={i.id}>
					<p>
						<b>Product:</b> {i.name}
					</p>
					<p>
						<b>Price:</b> ${i.price}
					</p>
					<p>
						<b>Quantity:</b> {i.amount}
					</p>
					<button
						type="button"
						onClick={() => handleUpdateQty({ id: i.id, change: 1 })}
					>
						+
					</button>
					<button
						type="button"
						onClick={() => handleUpdateQty({ id: i.id, change: -1 })}
					>
						-
					</button>
					<button type="button" onClick={() => handleRemove(i.id)}>
						Remove
					</button>
				</div>
			))}
			<div>
				<h3>Grand Total</h3>
				<h4>$ {totalAmount}</h4>
			</div>
		</div>
	);
};

export default Cart;
