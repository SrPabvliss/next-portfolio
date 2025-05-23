import { ProjectProps } from "@/app/types/projects.interface";
import { CodeIcon, NotepadText, FileText, Truck } from "lucide-react";

export const PROJECTS_DATA: ProjectProps[] = [
	{
		id: "gendocs-v3",
		title: "Universidad Técnica de Ambato",
		description:
			"Comprehensive document management system for academic administration, streamlining degree certificate generation and administrative processes.",
		image: "/images/projects/gendocs/main-image.png",
		technologies: [
			"Next.js",
			"TypeScript",
			"Material UI",
			"Zustand",
			"NestJS",
		],
		company: {
			name: "Gendocs V3",
			icon: <FileText className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "gab-motors",
		title: "Development Dynamics",
		description:
			"Auto shop management system with interactive calendar, appointment scheduling, and real-time notifications for mechanic workflow optimization.",
		image: "/images/projects/gab-motors/month-view-processed.png",
		technologies: ["Next.js", "TypeScript", "TailwindCSS", "Socket.io"],
		company: {
			name: "GabMotors Agenda",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "translogi",
		title: "MACOD SAS",
		description:
			"Mobile platform that connects cargo owners with transporters featuring real-time tracking, price negotiation, and secure verification.",
		image: "/images/projects/translogi/main-image.png",
		technologies: ["React Native", "Node.js", "Expo", "PostgreSQL"],
		company: {
			name: "TransLogi App",
			icon: <Truck className="w-6 h-6 text-white" />,
		},
	},/*
	{
		id: "demisoft",
		title: "Demisoft",
		description:
			"Diesel mechanical workshop management system with digital signatures, PDF report generation, and QR codes for streamlined workflows.",
		image: "/images/projects/30shots_so.png",
		technologies: ["Next.js", "TypeScript", "TailwindCSS", "React Query"],
		company: {
			name: "Dizasa Work Orders App",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},*/
];