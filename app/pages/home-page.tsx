import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

const Home = () => {
	return (
		<div className="flex flex-col min-h-screen bg-slate-950">
			{/* estructura de la pagina */}
			{/* navbar */}
			<Navbar />
			{/* hero */}
			<Hero />
			{/* about */}
			{/* skills */}
			{/* projects */}
			{/* contact */}
			{/* footer */}
		</div>
	);
};

export default Home;
