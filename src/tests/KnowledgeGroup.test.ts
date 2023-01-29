import TLevel from "$lib/enums/TLevel";
import TUsage from "$lib/enums/TUsage";
import KnowledgeGroup from "$lib/KnowledgeGroup.svelte";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";


describe("Button Component", () => {
	it("Renders", () => {
		render(KnowledgeGroup, {
			title: "Databases",
			faIcon: faDatabase,
			knowledgeItems: [
				{
					color: "bg-blue-400",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
					text: "MySQL",
					usage: TUsage.SOMETIMES,
					level: TLevel.COMPETENT,
					date: new Date("2021"),
				}
			]
		});
	});
});