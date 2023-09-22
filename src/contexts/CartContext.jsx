import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export const useCartContext = () => {
	return useContext(CartContext);
};

export default function CartContextProvider(props) {
	const [cart, setCart] = useState([]);
	const [favorite, setFavorite] = useState([]);

	return (
		<CartContext.Provider value={{ cart, setCart, favorite, setFavorite }}>
			{props.children}
		</CartContext.Provider>
	);
}
