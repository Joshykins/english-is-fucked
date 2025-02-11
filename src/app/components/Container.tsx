import { twMerge } from "tailwind-merge";

export const Container = ({
	children,
	className,
	innerClassName,
}: {
	children: React.ReactNode;
	className?: string;
	innerClassName?: string;
}) => {
	return (
		<div className={twMerge("w-screen px-6", className)}>
			<div
				className={twMerge(
					"container w-full border-r border-r-border border-l border-l-border p-2",
					innerClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
};
