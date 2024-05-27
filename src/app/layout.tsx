import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/Redux/Store/Store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Souvenir",
	description: "Save Questions and Answers",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link href="/logo.webp" rel="icon" />
			</head>
			<body className={inter.className}>
				<Provider store={store}>
					{children}
					<Toaster />
				</Provider>
			</body>
		</html>
	);
}
