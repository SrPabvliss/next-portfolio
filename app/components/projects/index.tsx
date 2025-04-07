"use client";

import React from "react";
import { motion } from "@/app/components/motion";
import ProjectsHeader from "./projects-header";
import { PROJECTS_DATA } from "@/app/constants/projects";
import ProjectCard from "./project-card";
import ViewAllProjectsCard from "./view-all-card";

const Projects = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="w-full bg-zinc-800 py-24"
		>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 gap-12">
					<div className="flex flex-col gap-8">
						<ProjectsHeader />
						{PROJECTS_DATA.filter((_, index) => index % 2 === 1).map(
							(project, index) => (
								<ProjectCard key={index} {...project} />
							)
						)}
					</div>

					<div className="flex flex-col gap-8">
						{PROJECTS_DATA.filter((_, index) => index % 2 === 0).map(
							(project, index) => (
								<>
									<ProjectCard key={index} {...project} />
								</>
							)
						)}
						<ViewAllProjectsCard />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
