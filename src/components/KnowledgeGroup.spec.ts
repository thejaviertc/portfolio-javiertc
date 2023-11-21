import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";
import KnowledgeGroup from "./KnowledgeGroup.svelte";

describe("KnowledgeGroup Component", () => {
	it("Renders", () => {
		render(KnowledgeGroup, {
			title: "Databases",
			faIcon: faDatabase,
		});
	});
});
