import React from "react";
import Home from "./pages/home-page";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import LearningProjects from "./components/learning";

const page = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Skills />
			<Projects />
			<LearningProjects />
		</main>
	);
};

export default page;
