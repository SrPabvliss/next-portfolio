import React from "react";
import Home from "./pages/home-page";
import Hero from "./components/hero";
import Skills from "./components/skills";

const page = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Skills />
		</main>
	);
};

export default page;
