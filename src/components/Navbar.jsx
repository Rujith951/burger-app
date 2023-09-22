import React, { useState } from "react";
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineClose,
	AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

function Navbar({ text, setText }) {
	// console.log("navbar");
	const [nav, setNav] = useState(false);
	const { cart } = useCartContext();
	const navigation = useNavigate();

	return (
		<div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
			{/* left side */}
			<div className="flex items-center">
				<div onClick={() => setNav(!nav)} className="cursor-pointer">
					<AiOutlineMenu size={30} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
					Best <span>Eats</span>
				</h1>
				<div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
					<p className="bg-black rounded-full text-white p-2">Delivery</p>
					<p className="p-2">Pickup</p>
				</div>
			</div>

			{/* search input  */}
			<div className="flex items-center px-2 w-[200px]  rounded-full bg-gray-200 sm:w-[400px] lg:w-[500px] ">
				<AiOutlineSearch size={25} />
				<input
					className="bg-transparent outline-none p-2 w-full"
					type="text"
					placeholder="Search food"
					onChange={e => setText(e.target.value)}
					value={text}
				/>
			</div>

			{/* Cart items  */}
			<Link to="/cart">
				<div>
					<button className="bg-black text-white hidden md:flex  items-center py-2 rounded-full">
						<BsFillCartFill size={20} />
						Cart - {cart.length}
					</button>
				</div>
			</Link>

			{/* Mobile Menu */}
			{/* Overlay */}

			{nav && (
				<div className="bg-black/80 fixed w-full h-screen top-0 z-10 left-0"></div>
			)}

			{/* Side Drawer menu */}

			<div
				className={
					nav
						? "fixed left-0 top-0 w-[300px] h-screen bg-white z-10 duration-300"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
				}
			>
				<AiOutlineClose
					onClick={() => setNav(false)}
					size={30}
					className="absolute right-4 top-4 cursor-pointer"
				/>
				<h2 className="text-2xl p-4">
					Best <span className="font-bold">Eats</span>
				</h2>
				<nav>
					<ul className="pl-5">
						<li className="text-xl py-4 flex">
							<TbTruckDelivery size={25} className="mr-4" />
							Orders
						</li>
						<li
							className="text-xl py-4 flex"
							onClick={() => {
								navigation("/favorite");
							}}
						>
							<MdFavorite size={25} className="mr-4" />
							Favorites
						</li>
						<li className="text-xl py-4 flex">
							<FaWallet size={25} className="mr-4" />
							Wallet
						</li>
						<li className="text-xl py-4 flex">
							<MdHelp size={25} className="mr-4" />
							Help
						</li>
						<li className="text-xl py-4 flex">
							<AiFillTag size={25} className="mr-4" />
							Promotions
						</li>
						<li className="text-xl py-4 flex">
							<BsFillSaveFill size={25} className="mr-4" />
							Best One
						</li>
						<li className="text-xl py-4 flex">
							<FaUserFriends size={25} className="mr-4" />
							Invite Friends
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
