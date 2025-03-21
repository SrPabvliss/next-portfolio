"use client";

import React from "react";
import Image from "next/image";
import { motion } from "@/app/components/motion";
import ProfilePicture from "@/public/images/profile-picture.webp";
import SocialLinks from "./social-links";
import WorkSection from "./work-section";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col w-full justify-center items-center gap-20 py-16 px-10"
		>
			<div className="flex gap-20 items-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative w-[500px] h-[500px] group"
				>
					<div className="absolute -inset-4 rounded-full blur-3xl bg-blue-600/30 transition-colors" />
					<div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden flex items-center justify-center">
						<Image
							src={ProfilePicture}
							alt="Hero"
							width={450}
							height={450}
							className="pt-10 rounded-full object-cover hover:scale-102 transition-transform duration-300"
						/>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-col gap-6"
				>
					<div className="w-56 h-3 bg-blue-500" />
					<h1 className="text-6xl font-bold text-white leading-tight">
						I&apos;m Pablo, a<br />
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: 0.5,
								duration: 1.6,
								ease: [0.4, 0, 0.2, 1],
							}}
							className="relative bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
						>
							Software Developer
						</motion.span>
					</h1>
					<p className="text-gray-400 text-xl max-w-2xl">
						Full Stack Developer with experience in web and mobile application
						development. Specialized in frontend, with knowledge in backend and
						mobile development.
					</p>
					<SocialLinks />
				</motion.div>
			</div>

			<WorkSection />
		</motion.div>
	);
};

export default Hero;
