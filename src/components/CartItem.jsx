import React from "react";
import {
	HiOutlinePlusSmall,
	HiOutlineMinusSmall,
	HiOutlineArchiveBoxXMark,
} from "react-icons/hi2";
import { useCartContext } from "../contexts/CartContext";

function CartItem({ name, price, count, image, id }) {
	const { cart, setCart } = useCartContext();

	function handleAdd(id) {
		let clonecart = cart.map(itm => {
			if (itm.id === id) {
				itm.count += 1;
			}
			return itm;
		});
		setCart(clonecart);
	}

	function handleSub(id) {
		let clonecart = structuredClone(cart);
		let filtered = clonecart.filter(itm => {
			if (itm.id === id && itm.count > 1) {
				itm.count -= 1;
				return true;
			}
			if (itm.id === id && itm.count === 1) {
				return false;
			}
			if (itm.id !== id) {
				return true;
			}
		});
		setCart(filtered);
	}

	function handleDelete(id) {
		let cloneCart = structuredClone(cart);

		const filteredcart = cloneCart.filter(itm => itm.id !== id);

		setCart(filteredcart);
	}

	return (
		<div className="">
			<div className="h-[300px] w-[350px] shadow-2xl rounded-lg">
				<img
					src={image}
					alt=""
					className="h-4/6  w-full object-cover  rounded-lg"
				/>
				<h1>{name}</h1>
				<h1>{price}</h1>
				<div className="flex items-center space-x-4">
					<HiOutlineMinusSmall size={25} onClick={() => handleSub(id)} />
					<h1 className="text-xl">{count}</h1>
					<HiOutlinePlusSmall size={25} onClick={() => handleAdd(id)} />
					<HiOutlineArchiveBoxXMark
						size={25}
						onClick={() => handleDelete(id)}
					/>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
