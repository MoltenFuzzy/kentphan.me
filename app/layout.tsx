import "./globals.css";

// export const metadata = {
// 	title: "Kent Phan",
// 	description: "It's just honest work",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<meta name="twitter:title" content="Kent Phan" />
			<meta name="twitter:description" content="It's just honest work" />
			<meta
				name="twitter:image"
				content="https://cdn.discordapp.com/attachments/941208408672067624/1131139972959830076/image.png"
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<body className="dark:bg-background">{children}</body>
		</html>
	);
}
