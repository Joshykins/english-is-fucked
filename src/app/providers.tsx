// app/providers.tsx
"use client";
import posthog, { type BootstrapConfig } from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export function PHProvider({
	children,
	bootstrapData,
}: {
	children: React.ReactNode;
	bootstrapData: BootstrapConfig;
}) {
	if (typeof window !== "undefined") {
		posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
			api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
			person_profiles: "identified_only",
			capture_pageview: false, // Disable automatic pageview capture, as we capture manually
			capture_pageleave: true,
			bootstrap: bootstrapData,
		});
	}

	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
