import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import Badge from "./Badge.svelte";

describe("Badge Component", () => {
	it("Renders", () => {
		render(Badge, {
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		});
	});
});
