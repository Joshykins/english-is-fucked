import { Button } from "../../components/ui/button";
import { ThemeToggler } from "./ThemeToggler";
import { Container } from "./Container";
import { ScrollArea } from "../../components/ui/scroll-area";
import { BookA } from "lucide-react";

export const SiteShell = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ScrollArea>
			<div className="flex h-screen max-w-screen flex-col divide-y divide-border ">
				<Container className="fixed top-0 z-10 border-b bg-background/50 backdrop-blur-md">
					<header className="flex items-center justify-between ">
						<div className="flex items-center">
							<Button variant={"ghost"} size={"default"}>
								<BookA className="!size-6 text-primary" />
								<span className="font-bold text-lg">Iglish-Iz-fucked</span>
							</Button>
						</div>
						<div className="flex items-center gap-4">
							<ThemeToggler />
						</div>
					</header>
				</Container>
				{children}
				<Container>
					<footer>
						<p className="py-8 text-center text-foreground/70 text-lg">
							"If yoo ain't otto-maytin, yoo jus man-yoo-lee failing at scale."
						</p>
						<p className="py-8 text-center text-foreground/50 text-xs">
							– Chad GPT, Synerjistik AI Enthooziast
						</p>
					</footer>
				</Container>
			</div>
		</ScrollArea>
	);
};
