import { motion } from "@/app/components/motion";

const AboutHeader = () => {
	return (
		<div className="flex flex-col gap-4 mb-10">
			<div className="flex items-center gap-2">
				<span className="text-blue-500 font-medium text-lg">/</span>
				<span className="text-white font-medium text-lg">ABOUT ME</span>
			</div>
			<h2 className="text-4xl md:text-5xl font-bold text-white">
				The person behind the code
			</h2>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "200px" }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="h-1 bg-blue-500"
			/>
		</div>
	);
};

export default AboutHeader;
