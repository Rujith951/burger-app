import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";
import Favorite from "./pages/Favorite.jsx";
import Items from "./pages/Items.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<CartContextProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/favorite" element={<Favorite />} />
				<Route path="/items" element={<Items />} />
			</Routes>
		</BrowserRouter>
	</CartContextProvider>
);
