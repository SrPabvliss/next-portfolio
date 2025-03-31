import { LucideIcon } from "lucide-react";

export interface WorkCardProps {
	title: string;
	description: string;
	ctaText: string;
	link?: string;
}

export interface SocialLinkProps {
	href: string;
	icon: LucideIcon;
}
