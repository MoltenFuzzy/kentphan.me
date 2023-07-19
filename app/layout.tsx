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
			<meta
				property="og:image"
				content="https://cdn.discordapp.com/attachments/941208408672067624/1131139972959830076/image.png"
			/>
			<body className="dark:bg-background">{children}</body>
		</html>
	);
}
