import React from "react";
import FavoriteItems from "../components/FavoriteItems";
import { useCartContext } from "../contexts/CartContext";

function Favorite() {
	const { favorite, setFavorite } = useCartContext();

	return favorite.length === 0 ? (
		<div>
			<h1>No favorite items</h1>
		</div>
	) : (
		<div>
			{favorite.map(item => (
				<FavoriteItems {...item} />
			))}
		</div>
	);
}

export default Favorite;
