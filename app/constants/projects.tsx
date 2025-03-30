import { ProjectProps } from "@/app/types/projects.interface";
import { CodeIcon, NotepadText } from "lucide-react";

export const PROJECTS_DATA: ProjectProps[] = [
	{
		title: "Universidad Técnica de Ambato",
		description:
			"Modern website development for a digital agency, featuring a clean design and smooth animations.",
		image: "/images/projects/30shots_so.png",
		technologies: [
			"React JS",
			"Web Development",
			"TailwindCSS",
			"Framer Motion",
		],
		company: {
			name: "Gendocs V3",
			icon: <NotepadText className="w-6 h-6 text-white" />,
		},
	},
	{
		title: "Development Dynamics",
		description:
			"DeFi platform development with real-time crypto data integration and interactive trading features.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Web Development", "Web3", "Crypto"],
		company: {
			name: "GabMotors Agenda",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},
	{
		title: "MACOD",
		description:
			"DeFi platform development with real-time crypto data integration and interactive trading features.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Web Development", "Web3", "Crypto"],
		company: {
			name: "Translogi App",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},
	{
		title: "Demisoft",
		description:
			"DeFi platform development with real-time crypto data integration and interactive trading features.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Web Development", "Web3", "Crypto"],
		company: {
			name: "Dizasa Work Orders App",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},
];
