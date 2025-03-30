import { motion } from "@/app/components/motion";
import Image from "next/image";
import { ProjectProps } from "@/app/types/projects.interface";

const LearningProjectCard = ({
	title,
	description,
	image,
	technologies,
	company,
}: ProjectProps) => {
	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden transition-all"
		>
			<div className="relative w-full aspect-video">
				<Image src={image} alt={title} fill className="object-cover" />
			</div>

			<div className="p-4">
				<div className="flex items-center gap-2 mb-2">
					<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
						{company.icon}
					</div>
					<h3 className="text-lg font-semibold text-white">{title}</h3>
				</div>

				<p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>

				<div className="flex flex-wrap gap-1 mt-2">
					{technologies.slice(0, 3).map((tech, index) => (
						<span
							key={index}
							className="px-2 py-1 rounded-full text-xs bg-white/10 text-white"
						>
							{tech}
						</span>
					))}
					{technologies.length > 3 && (
						<span className="px-2 py-1 rounded-full text-xs bg-white/10 text-white">
							+{technologies.length - 3}
						</span>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default LearningProjectCard;
