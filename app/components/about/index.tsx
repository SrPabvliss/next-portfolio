"use client";

import React from "react";
import { motion } from "@/app/components/motion";
import { ABOUT_CONTENT } from "@/app/constants/about-content";
import AboutHeader from "./about-header";
import { BookOpen, Code, Lightbulb, Music } from "lucide-react";

const About = () => {
	const sections = [
		{
			title: "My Journey",
			content: ABOUT_CONTENT.mainContent,
			icon: <BookOpen className="w-6 h-6 text-blue-500" />,
		},
		{
			title: "What I Do",
			content: ABOUT_CONTENT.whatIDo,
			icon: <Code className="w-6 h-6 text-blue-500" />,
		},
		{
			title: "How I Work",
			content: ABOUT_CONTENT.howIWork,
			icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
		},
		{
			title: "Beyond Code",
			content: ABOUT_CONTENT.beyondCode,
			icon: <Music className="w-6 h-6 text-blue-500" />,
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="w-full bg-[#1c1c1c] py-24"
		>
			<div className="container mx-auto px-4">
				<AboutHeader />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{sections.map((section, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className="bg-zinc-800 rounded-xl p-6 border border-white/5"
						>
							<div className="flex items-center gap-3 mb-4">
								{section.icon}
								<h3 className="text-2xl font-bold text-white">
									{section.title}
								</h3>
							</div>

							<div className="text-gray-400 space-y-4">
								{section.content.split("\n\n").map((paragraph, idx) => (
									<p key={idx}>{paragraph}</p>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default About;
