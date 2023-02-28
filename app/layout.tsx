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
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
