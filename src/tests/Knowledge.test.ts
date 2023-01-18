import TLevel from "../lib/enums/TLevel";
import TUsage from "../lib/enums/TUsage";
import Knowledge from "../lib/Knowledge.svelte";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";


describe("Knowledge Component", () => {
	it("Renders 'Just Starting' when 2 months have not yet passed", () => {
		const testingDate = new Date(Date.now());
		testingDate.setMonth(testingDate.getMonth() - 1);

		render(Knowledge, { title: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", usage: TUsage.ALWAYS, level: TLevel.PROFICIENT, date: testingDate });

		expect(screen.getByText(/Just Starting/i)).toBeTruthy();
	});

	it("Renders '11 months' when a year have not yet passed", () => {
		const testingDate = new Date(Date.now());
		testingDate.setMonth(testingDate.getMonth() - 11);

		render(Knowledge, { title: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", usage: TUsage.ALWAYS, level: TLevel.PROFICIENT, date: testingDate });

		expect(screen.getByText(/months/i)).toBeTruthy();
	});

	it("Renders '+x year/s' when x years have passed", () => {
		const testingDate = new Date(Date.now());
		testingDate.setFullYear(testingDate.getFullYear() - 2);

		render(Knowledge, { title: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", usage: TUsage.ALWAYS, level: TLevel.PROFICIENT, date: testingDate });

		expect(screen.getByText(/year/i)).toBeTruthy();
	});
});