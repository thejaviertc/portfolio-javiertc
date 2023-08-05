import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Project from "./Project.svelte";

describe("Project Component", () => {
	it("Renders", () => {
		render(Project, {
			image: "https://repository-images.githubusercontent.com/289227137/bab81a80-7abc-11eb-8c63-37afc324cb8b",
			name: "Steam Workshop Stats",
			description: "See the views, subscriptions and favs of your Steam",
			live: "https://thejaviertc.github.io/steam-workshop-stats/",
			github: "https://github.com/thejaviertc/steam-workshop-stats",
		});
	});
});
