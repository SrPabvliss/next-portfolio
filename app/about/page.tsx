"use client";

import React from "react";
import { motion } from "@/app/components/motion";
import { ABOUT_CONTENT } from "@/app/constants/about-content";
import { ArrowLeft, Code, Briefcase, Lightbulb, Music } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="min-h-screen bg-zinc-900 py-12 px-4 text-gray-100"
		>
			<div className="container mx-auto">
				{/* Header with navigation */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-12"
				>
					<Link
						href="/"
						className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors w-fit mb-8 group"
					>
						<ArrowLeft
							size={18}
							className="group-hover:-translate-x-1 transition-transform"
						/>
						<span className="font-medium">Back to Home</span>
					</Link>

					<h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
						About Me
					</h1>
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: "120px" }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="h-1 bg-blue-500 mb-4"
					/>
					<p className="text-xl text-gray-400 max-w-2xl">
						Frontend developer with a passion for creating intuitive and elegant
						user experiences.
					</p>
				</motion.div>

				{/* Profile section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-zinc-800 p-6 rounded-xl border border-white/5 shadow-lg"
				>
					<div className="md:col-span-1">
						<div className="relative w-40 h-40 mx-auto md:w-full md:h-60 overflow-hidden rounded-xl border border-white/10">
							<Image
								src="/images/projects/30shots_so.png"
								alt="Profile picture"
								fill
								className="object-cover"
							/>
						</div>
					</div>

					<div className="md:col-span-2 space-y-4">
						<h2 className="text-2xl font-semibold border-b border-white/10 pb-2 mb-4">
							My Journey
						</h2>
						<div className="text-gray-300 space-y-4">
							{ABOUT_CONTENT.mainContent.split("\n\n").map((paragraph, idx) => (
								<p key={idx} className="text-base leading-relaxed">
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</motion.div>

				{/* Content sections with cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{/* What I do card */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="bg-zinc-800 rounded-xl p-6 border border-white/5 shadow-lg h-full flex flex-col"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 rounded-lg bg-blue-500/20">
								<Code size={22} className="text-blue-500" />
							</div>
							<h2 className="text-xl font-semibold">What I Do</h2>
						</div>

						<div className="text-gray-300 space-y-3 flex-grow">
							{ABOUT_CONTENT.whatIDo.split("\n\n").map((paragraph, idx) => (
								<p key={idx} className="text-base leading-relaxed">
									{paragraph}
								</p>
							))}
						</div>

						<div className="mt-6 pt-4 border-t border-white/10">
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									Frontend
								</span>
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									React
								</span>
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									Mobile
								</span>
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									Full Stack
								</span>
							</div>
						</div>
					</motion.div>

					{/* How I work card */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="bg-zinc-800 rounded-xl p-6 border border-white/5 shadow-lg h-full flex flex-col"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 rounded-lg bg-blue-500/20">
								<Lightbulb size={22} className="text-blue-500" />
							</div>
							<h2 className="text-xl font-semibold">How I Work</h2>
						</div>

						<div className="text-gray-300 space-y-3 flex-grow">
							{ABOUT_CONTENT.howIWork.split("\n\n").map((paragraph, idx) => (
								<p key={idx} className="text-base leading-relaxed">
									{paragraph}
								</p>
							))}
						</div>

						<div className="mt-6 pt-4 border-t border-white/10">
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									Visual Planning
								</span>
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									User-Centered
								</span>
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									Problem Solving
								</span>
								<span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
									Tech Validation
								</span>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Beyond code section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-zinc-800 rounded-xl p-6 border border-white/5 shadow-lg mb-16"
				>
					<div className="flex items-center gap-3 mb-6">
						<div className="p-2 rounded-lg bg-white/10">
							<Music size={22} className="text-blue-500" />
						</div>
						<h2 className="text-xl font-semibold">Beyond Code</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
						<div className="md:col-span-2">
							<div className="text-gray-300 space-y-3">
								{ABOUT_CONTENT.beyondCode
									.split("\n\n")
									.map((paragraph, idx) => (
										<p key={idx} className="text-base leading-relaxed">
											{paragraph}
										</p>
									))}
							</div>
						</div>

						<div className="relative overflow-hidden rounded-xl h-48 md:h-full">
							<Image
								src="/images/projects/30shots_so.png"
								alt="Music hobby"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
						</div>
					</div>
				</motion.div>

				{/* Current goals section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					className="bg-zinc-800 rounded-xl p-6 border border-blue-500/20 shadow-lg"
				>
					<div className="flex items-center gap-3 mb-6">
						<div className="p-2 rounded-lg bg-white/10">
							<Briefcase size={22} className="text-blue-500" />
						</div>
						<h2 className="text-xl font-semibold">Current Goals</h2>
					</div>

					<p className="text-lg text-gray-300 mb-8">
						I'm currently seeking opportunities with organizations that value
						continuous learning and growth. While frontend roles align best with
						my passions, I'm most interested in joining a culture where I can
						both contribute my skills and continue expanding my capabilities.
					</p>

					<div className="flex flex-wrap gap-4">
						<Link
							href="/#projects"
							className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
						>
							See My Work
						</Link>
						<Link
							href="/"
							className="px-5 py-2.5 bg-transparent hover:bg-white/10 text-gray-300 border border-gray-600 rounded-lg font-medium transition-colors"
						>
							Back to Home
						</Link>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
