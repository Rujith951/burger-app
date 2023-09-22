import React from "react";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { useCartContext } from "../contexts/CartContext";

const FavoriteItems = ({ name, image, price, id }) => {
	const { favorite, setFavorite } = useCartContext();

	function handleDel(id) {
		let favoriteClone = structuredClone(favorite);

		let favI = favoriteClone.filter(itm => {
			if (!(itm.id === id)) {
				return true;
			}
			return false;
		});

		setFavorite(favI);
	}

	return (
		<div className="space-y-4  p-5">
			<div className="h-[300px] w-[350px] shadow-2xl rounded-lg space-y-2 ">
				<img
					src={image}
					alt=""
					className="h-4/6  w-full object-cover  rounded-lg"
				/>
				<h1>{name}</h1>
				<h1>{price}</h1>
				<HiOutlineArchiveBoxXMark onClick={() => handleDel(id)} />
			</div>
		</div>
	);
};

export default FavoriteItems;
