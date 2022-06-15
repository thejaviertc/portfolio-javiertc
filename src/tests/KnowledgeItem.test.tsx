import React from "react";
import { render, screen } from "@testing-library/react";
import KnowledgeItem from "../components/KnowledgeItem";

describe("Knowledge Item Component", () => {
	test("Renders correctly a success Knowledge Item", () => {
		render(
			<KnowledgeItem
				title="HTML"
				img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
				amount={85}
			/>
		);
		expect(screen.getByText(/HTML/));
	});

	test("Renders correctly a warning Knowledge Item", () => {
		render(
			<KnowledgeItem
				title="CSS"
				img="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
				amount={50}
			/>
		);
		expect(screen.getByText(/CSS/));
	});

	test("Renders correctly a danger Knowledge Item", () => {
		render(
			<KnowledgeItem
				title="SCSS"
				img="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
				amount={25}
			/>
		);
		expect(screen.getByText(/SCSS/));
	});
});
