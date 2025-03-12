import socialLinks from "@/app/constants/social-links";

const SocialLinks = () => {
	return (
		<div className="flex gap-4 mt-4">
			{socialLinks.map((link, index) => (
				<a
					key={index}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<link.icon
						className="text-white hover:text-blue-500 transition-colors"
						size={28}
					/>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
