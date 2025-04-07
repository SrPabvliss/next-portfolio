"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/app/types/projects.interface";

const ProjectCard = ({
	id,
	title,
	description,
	image,
	technologies,
	company,
}: ProjectProps) => {
	// Create the card content
	const cardContent = (
		<motion.div
			whileHover={{ scale: 1.02 }}
			className="group relative rounded-3xl overflow-hidden bg-[#1e1e1e] border border-white/5 h-full"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			<div className="flex flex-col gap-4 p-6">
				<div className="flex items-center gap-4">
					<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
						{company.icon}
					</div>
					<div>
						<h3 className="text-2xl font-bold text-white">{company.name}</h3>
						<p className="text-gray-400">{title}</p>
					</div>
				</div>

				<p className="text-gray-400">{description}</p>

				<div className="flex flex-wrap gap-2">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
			<div className="relative w-full aspect-[16/9]">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
		</motion.div>
	);

	// If id is provided, wrap in a Link, otherwise just return the card
	if (id) {
		return <Link href={`/projects/${id}`}>{cardContent}</Link>;
	}

	return cardContent;
};

export default ProjectCard;