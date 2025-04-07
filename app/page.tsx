import React from "react";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";

const page = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Skills />
			<Projects />
		</main>
	);
};

export default page;
