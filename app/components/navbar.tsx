"use client";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NAV_ITEMS from "../constants/nav-items";

const Navbar = () => {
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);

	return (
		<div className="flex justify-center items-center p-4 mt-6">
			<div className="container mx-auto max-w-5xl px-4">
				<div className="flex justify-between items-center text-white">
					<div className="flex items-center gap-2 transition-transform duration-350 hover:scale-105 origin-left cursor-pointer">
						<CodeXml color="#075ee5" className="w-10 h-10" />
						<h1 className="text-3xl font-bold">Pablo Villacrés</h1>
					</div>
					<div className="flex gap-8 text-xl font-medium">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item.id}
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
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
