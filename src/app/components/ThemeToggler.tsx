"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

export function ThemeToggler() {
	const { setTheme, theme } = useTheme();

	const isLight = theme === "light";
	const isDark = theme === "dark";
	const toggleTheme = () => {
		if (isLight) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		// Simple two-tone toggle
		<>
			{isLight && (
				<Button onClick={toggleTheme} variant={"outline"} size={"icon"}>
					<Moon />
				</Button>
			)}
			{isDark && (
				<Button onClick={toggleTheme} variant={"outline"} size={"icon"}>
					<Sun />
				</Button>
			)}
			{!isLight && !isDark && (
				<Button onClick={toggleTheme} variant={"outline"} size={"icon"}>
					<Moon />
				</Button>
			)}
		</>
	);
}
