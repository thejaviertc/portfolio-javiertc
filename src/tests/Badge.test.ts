import Badge from "../lib/Badge.svelte";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

describe("Badge Component", () => {
	it("Renders", () => {
		render(Badge, { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" });
	});
});