import { motion } from "../motion";

const ProjectsHeader = () => {
	return (
		<div className=" flex flex-col gap-4 mb-6">
			<div className="flex items-center gap-2">
				<span className="text-blue-500 font-medium text-lg">/</span>
				<span className="text-white font-medium text-lg">MY PORTFOLIO</span>
			</div>
			<h2 className="text-4xl md:text-5xl font-bold text-white">
				Take a look at the latest projects I've done
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

export default ProjectsHeader;
