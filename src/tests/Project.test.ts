import Project from "$lib/Project.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

describe("Project Component", () => {
	it("Renders", () => {
		render(Project, {
			image: "https://repository-images.githubusercontent.com/289227137/bab81a80-7abc-11eb-8c63-37afc324cb8b", name: "Steam Workshop Stats", description: "See the views, subscriptions and favs of your Steam", badges: [
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
			], live: "https://thejaviertc.github.io/steam-workshop-stats/", github: "https://github.com/thejaviertc/steam-workshop-stats"
		});
	});
});