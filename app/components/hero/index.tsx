import React from "react";
import Image from "next/image";
import ProfilePicture from "@/public/images/profile-picture.webp";
import SocialLinks from "./social-links";
import WorkSection from "./work-section";

const Hero = () => {
	return (
		<div className="flex flex-col w-full justify-center items-center gap-20 py-16 px-10">
			<div className="flex gap-20 items-center">
				<div className="relative w-[500px] h-[500px] group">
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
				</div>
				<div className="flex flex-col gap-6">
					<div className="w-56 h-3 bg-blue-500" />
					<h1 className="text-6xl font-bold text-white leading-tight">
						I&apos;m Pablo, a<br />
						Software Developer
					</h1>
					<p className="text-gray-400 text-xl max-w-2xl">
						Full Stack Developer with experience in web and mobile application
						development. Specialized in frontend, with knowledge in backend and
						mobile development.
					</p>
					<SocialLinks />
				</div>
			</div>

			<WorkSection />
		</div>
	);
};

export default Hero;
