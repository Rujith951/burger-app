import React from "react";

function Hero() {
	// console.log("im hero");
	return (
		<div className="m-w-[1640px] mx-auto p-4">
			<div className="max-h-[500px] relative">
				{/* Overlay */}
				<div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						The <samp className="text-orange-500">Best</samp>
					</h1>
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						<samp className="text-orange-500">Foods</samp>Delivered
					</h1>
				</div>
				<img
					className="w-full max-h-[500px] object-cover"
					src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="/"
				/>
			</div>
		</div>
	);
}

export default React.memo(Hero);
