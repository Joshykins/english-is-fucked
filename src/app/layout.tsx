import "./globals.css";
import { SiteShell } from "./components/SiteShell";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "../components/ui/toaster";
import { DrawerCSSProvider } from "../components/ui/drawer";

const RootLayout = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Why Iz Inglish So Messt Up?" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<title>Why Iz Inglish So Messt Up?</title>
				{/* Favicon */}
				<link href="/favicon.svg" rel="icon" type="image/svg" sizes="32x32" />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<DrawerCSSProvider>
						{/* Layout UI */}
						<SiteShell>{children}</SiteShell>
						<Toaster />
					</DrawerCSSProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
