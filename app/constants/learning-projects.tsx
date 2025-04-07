import { ProjectProps } from "@/app/types/projects.interface";
import { CodeIcon, BookOpen, GraduationCap } from "lucide-react";

export const LEARNING_PROJECTS_DATA: ProjectProps[] = [
	{
		id: "learning-project-1",
		title: "Aplicación de Notas",
		description:
			"Proyecto de aprendizaje para practicar React y localStorage. Una simple aplicación de notas con funcionalidades CRUD.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "CSS", "LocalStorage"],
		company: {
			name: "Proyecto Personal",
			icon: <BookOpen className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-2",
		title: "Sistema de Gestión Universitaria",
		description:
			"Proyecto universitario para la gestión de estudiantes, profesores y cursos utilizando Java y PostgreSQL.",
		image: "/images/projects/30shots_so.png",
		technologies: ["Java", "PostgreSQL", "Swing"],
		company: {
			name: "Proyecto Universitario",
			icon: <GraduationCap className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-3",
		title: "Clon de Twitter",
		description:
			"Proyecto de aprendizaje para practicar desarrollo full-stack implementando características básicas de Twitter.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Node.js", "MongoDB"],
		company: {
			name: "Proyecto Personal",
			icon: <BookOpen className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-4",
		title: "E-commerce Básico",
		description:
			"Aplicación web de comercio electrónico simple para aprender sobre carros de compra y gestión de estados.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Redux", "Firebase"],
		company: {
			name: "Bootcamp",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-5",
		title: "Aplicación de Notas",
		description:
			"Proyecto de aprendizaje para practicar React y localStorage. Una simple aplicación de notas con funcionalidades CRUD.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "CSS", "LocalStorage"],
		company: {
			name: "Proyecto Personal",
			icon: <BookOpen className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-6",
		title: "Sistema de Gestión Universitaria",
		description:
			"Proyecto universitario para la gestión de estudiantes, profesores y cursos utilizando Java y PostgreSQL.",
		image: "/images/projects/30shots_so.png",
		technologies: ["Java", "PostgreSQL", "Swing"],
		company: {
			name: "Proyecto Universitario",
			icon: <GraduationCap className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-7",
		title: "Clon de Twitter",
		description:
			"Proyecto de aprendizaje para practicar desarrollo full-stack implementando características básicas de Twitter.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Node.js", "MongoDB"],
		company: {
			name: "Proyecto Personal",
			icon: <BookOpen className="w-6 h-6 text-white" />,
		},
	},
	{
		id: "learning-project-8",
		title: "E-commerce Básico",
		description:
			"Aplicación web de comercio electrónico simple para aprender sobre carros de compra y gestión de estados.",
		image: "/images/projects/30shots_so.png",
		technologies: ["React JS", "Redux", "Firebase"],
		company: {
			name: "Bootcamp",
			icon: <CodeIcon className="w-6 h-6 text-white" />,
		},
	},
];
