import React from "react";
import CartItem from "../components/CartItem";
import { useCartContext } from "../contexts/CartContext";

function Cart() {
	const { cart } = useCartContext();

	return cart.length === 0 ? (
		<div>
			<h1>Cart is empty</h1>
		</div>
	) : (
		<div className="space-y-4 p-5">
			{cart.map(itm => (
				<CartItem key={itm.id} {...itm} />
			))}
		</div>
	);
}

export default Cart;
