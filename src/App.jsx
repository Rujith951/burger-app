import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

/*


	cart = [
		{
			id: 1,
			name: "Double Cheeseburger",
			category: "burger",
			image:
				"https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
			price: 300,
			count:1
		}
	]

*/

const App = () => {
	const [text, setText] = useState("");

	return (
		<>
			<Navbar text={text} setText={setText} />
			<Hero />
			<HeadlineCards />
			<Food text={text} />
			<Category />
		</>
	);
};

export default App;
