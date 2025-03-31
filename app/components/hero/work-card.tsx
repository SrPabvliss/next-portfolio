import { MoveRight } from "lucide-react";
import { motion } from "@/app/components/motion";
import { WorkCardProps } from "@/app/types/hero.interface";
import Link from "next/link";

const WorkCard = ({ title, description, ctaText, link }: WorkCardProps) => (
	<motion.div
		whileHover={{ scale: 1.02 }}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.3 }}
		className="group relative  cursor-pointer flex-1 "
	>
		<div className="absolute -inset-1 rounded-lg bg-white/0 group-hover:bg-gradient-to-r from-blue-500/12 via-purple-400/12 to-blue-500/12 blur-xl transition-all duration-300" />
		<div className="relative flex flex-col justify-between gap-6 rounded-lg border border-white/15 group-hover:border-white/25 transition-all duration-300 min-h-[200px] p-6">
			<h2 className="text-lg font-bold text-white">{title}</h2>
			<p className="text-gray-400 text-md ">{description}</p>
			<Link href={link || "#"}>
				<motion.span
					whileHover={{ x: 5 }}
					className="flex items-center gap-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-400 group-hover:to-blue-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient transition-colors w-fit"
				>
					<span className="text-md font-medium">{ctaText}</span>
					<MoveRight
						className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-400 group-hover:to-blue-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient transition-colors"
						size={20}
					/>
				</motion.span>
			</Link>
		</div>
	</motion.div>
);

export default WorkCard;
