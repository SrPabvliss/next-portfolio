import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./styles/globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pablo Villacrés",
	description: "Pablo's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
