import { MoveRight } from "lucide-react";
import { WorkCardProps } from "@/app/types/hero.interface";

const WorkCard = ({ title, description, ctaText }: WorkCardProps) => (
	<div className="group relative p-2 cursor-pointer">
		<div className="absolute -inset-1 rounded-lg bg-white/0 group-hover:bg-blue-500/12 blur-xl transition-all duration-300" />
		<div className="relative flex flex-col gap-6 rounded-lg border border-white/5 group-hover:border-white/20 p-4 transition-all duration-300">
			<h2 className="text-lg font-bold text-white">{title}</h2>
			<p className="text-gray-400 text-md max-w-2xl">{description}</p>
			<span className="flex items-center gap-2 text-white group-hover:text-blue-500 transition-colors w-fit">
				<span className="text-md font-medium">{ctaText}</span>
				<MoveRight
					className="text-white group-hover:text-blue-500 transition-colors"
					size={20}
				/>
			</span>
		</div>
	</div>
);

export default WorkCard;
