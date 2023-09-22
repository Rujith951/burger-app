import React, { useState } from "react";
import { data } from "./data/data.js";
import { HiPlusSmall, HiMiniHeart } from "react-icons/hi2";
import { useCartContext } from "../contexts/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Food({ text }) {
	// console.log("food");
	const [Foods, setFoods] = useState(data);
	// console.log("food", Foods);
	const [filterT, setFilterT] = useState("all");
	const [filterP, setFilterP] = useState(null);
	const { setCart, setFavorite, cart, favorite } = useCartContext();

	const addItemToCart = item => {
		let cloneCart = JSON.parse(JSON.stringify(cart));
		let itemP = cloneCart.find(itm => itm.id === item.id);

		if (itemP) {
			itemP.count += 1;
		} else {
			cloneCart.push({
				...item,
				count: 1,
			});
		}

		setCart(cloneCart);
	};

	const AddHeart = item => {
		let cloneHeart = structuredClone(favorite);

		let FavoriteP = cloneHeart.find(itm => itm.id === item.id);

		if (!FavoriteP) {
			cloneHeart.push(item);
		}

		setFavorite(cloneHeart);
	};

	const filteredItems = Foods.filter(itm => {
		if (
			(filterT === itm.category || filterT === "all") &&
			(filterP === itm.price || filterP === null) &&
			itm.name.toLowerCase().includes(text.toLowerCase())
		)
			return true;
	});

	// // fFilter by category
	// const FilterType = catergory => {
	// 	if (catergory === "all") setFoods(data);
	// 	else
	// 		setFoods(
	// 			data.filter(item => {
	// 				return item.category === catergory;
	// 			})
	// 		);
	// };

	// // filter by price

	// const FilterPrice = price => {
	// 	setFoods(
	// 		data.filter(item => {
	// 			return item.price === price;
	// 		})
	// 	);
	// };

	return (
		<div className="max-w-[1640px] px-4 py-12 m-auto">
			<h1 className="text-orange-600 font-bold text-4xl text-center">
				Top Rated Menu Items
			</h1>

			{/* Filter Row */}
			<div className="flex flex-col lg:flex-row justify-between">
				{/* Filter Type */}
				<div>
					<p className="font-bold text-gray-700">Filter Type</p>
					<div className="flex justify-between  flex-wrap">
						<button
							onClick={() => {
								setFilterT("all");
							}}
							className={`${
								filterT == "all" ? "bg-orange-600 text-white" : ""
							} border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}
						>
							All
						</button>
						<button
							onClick={() => {
								setFilterT("burger");
							}}
							className={`${
								filterT == "burger" ? "bg-orange-600 text-white" : ""
							} border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}
						>
							Burgers
						</button>
						<button
							onClick={() => {
								setFilterT("pizza");
							}}
							className={`${
								filterT == "pizza" ? "bg-orange-600 text-white" : ""
							} border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}
						>
							Pizza
						</button>
						<button
							onClick={() => {
								setFilterT("salad");
							}}
							className={`${
								filterT == "salad" ? "bg-orange-600 text-white" : ""
							} border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}
						>
							Salads
						</button>
						<button
							onClick={() => {
								setFilterT("chicken");
							}}
							className={`${
								filterT == "chicken" ? "bg-orange-600 text-white" : ""
							} border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}
						>
							Chiken
						</button>
					</div>
				</div>
				{/* Filter Price */}
				<div>
					<p className="font-bold text-gray-700">Filter Price</p>
					<div className="flex justify-between max-w-[390px] w-full">
						{[300, 400, 500, 600].map(price => (
							<button
								key={price}
								onClick={() => {
									setFilterP(price === filterP ? null : price);
								}}
								className={`${
									filterP == price ? "bg-orange-600 text-white" : ""
								} border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`}
							>
								{price}
							</button>
						))}
					</div>
				</div>
			</div>
			{/* Display Foods */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
				{filteredItems.map((item, index) => (
					<div
						key={index}
						className="border shadow-lg hover:scale-105 duration-300 rounded-lg "
					>
						<img
							src={item.image}
							alt=""
							className="w-full h-[200px] object-cover rounded-t-lg"
						/>
						<div className="flex justify-between px-2 py-2">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-500 text-white p-1 rounded-full">
									{item.price}
								</span>
							</p>
						</div>
						<div className="flex space-x-5 pl-2 mb-1">
							<HiPlusSmall
								size={20}
								className="cursor-pointer"
								onClick={() => addItemToCart(item)}
							/>
							<HiMiniHeart
								size={20}
								className="cursor-pointer"
								onClick={() => AddHeart(item)}
							/>
						</div>
					</div>
				))}
			</div>
			{filteredItems.length === 0 && (
				<p className="text-2xl w-full text-slate-500 font-bold text-center">
					No Items Found
				</p>
			)}
		</div>
	);
}

export default Food;
