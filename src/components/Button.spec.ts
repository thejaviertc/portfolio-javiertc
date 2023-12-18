import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import Button from "$components/Button.svelte";

describe("Button Component", () => {
	it("Renders", () => {
		render(Button, {
			faIcon: faGithub,
			link: "https://github.com/thejaviertc",
		});
	});
});
