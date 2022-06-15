import React from "react";
import { render, screen } from "@testing-library/react";
import KnowledgeGroup from "../components/KnowledgeGroup";
import KnowledgeItem from "../components/KnowledgeItem";

describe("Knowledge Group Component", () => {
	test("Renders correctly", () => {
		render(
			<KnowledgeGroup
				title="Databases"
				items={[
					<KnowledgeItem
						key={1}
						title="SQL"
						img="https://www.logo.wine/a/logo/Oracle_SQL_Developer/Oracle_SQL_Developer-Logo.wine.svg"
						amount={50}
					/>,
					<KnowledgeItem
						key={2}
						title="MySQL"
						img="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg"
						amount={25}
					/>,
				]}
			/>
		);
		expect(screen.getByText(/Databases/));
		expect(screen.getByText(/^SQL$/i));
		expect(screen.getByText(/^MySQL$/i));
	});
});
