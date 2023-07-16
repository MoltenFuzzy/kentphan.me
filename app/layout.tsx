import "./globals.css";

export const metadata = {
	title: "Kent Phan",
	description: "My personal website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className="dark:bg-background">{children}</body>
		</html>
	);
}
