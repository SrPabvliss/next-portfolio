"use client";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "@/app/components/motion";
import NAV_ITEMS from "../constants/nav-items";

const Navbar = () => {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex justify-center items-center p-4 mt-6"
		>
			<div className="container mx-auto max-w-5xl px-4">
				<div className="flex justify-between items-center text-white">
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="flex items-center gap-2 cursor-pointer origin-left"
					>
						<CodeXml color="#075ee5" className="w-10 h-10" />
						<h1 className="text-3xl font-bold">Pablo Villacrés</h1>
					</motion.div>
					<div className="flex gap-8 text-xl font-medium">
						{NAV_ITEMS.map((item) => (
							<motion.div key={item.id} whileHover={{ scale: 1.1 }}>
								<Link
									href={item.href}
									className={`transition-all duration-300 ${
										hoveredLink && hoveredLink !== item.id
											? "opacity-50"
											: "opacity-100"
									}`}
									onMouseEnter={() => setHoveredLink(item.id)}
									onMouseLeave={() => setHoveredLink(null)}
								>
									{item.name}
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Navbar;
