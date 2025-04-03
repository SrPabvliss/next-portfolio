import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface Company {
	name: string;
	icon: ReactNode;
}

export interface ProjectProps {
	id: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	company: {
		name: string;
		icon: ReactNode;
	};
	featured?: boolean;
}
