import React from "react";
import Product from "./Product";
import productlist from "../data";

const Shop = () => {
	return (
		<div>
			{productlist.map((item) => {
				return <Product key={item.id} item={item} />;
			})}
		</div>
	);
};

export default Shop;
