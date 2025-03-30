import { ReactNode } from "react";

export interface Company {
	name: string;
	icon: ReactNode;
}

export interface ProjectProps {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	company: Company;
	featured?: boolean;
}
