import React from "react";
import { render, screen } from "@testing-library/react";
import Project from "../components/Project";
import Badge from "../components/Badge";

describe("Project Component", () => {
	test("Renders correctly on left side", () => {
		render(
			<Project
				title="Twitch Data"
				description="See the views and followers of your favourite Twitch Streamers!"
				image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/public/img/twitch-stats.jpg"
				badges={[
					<Badge key={1} title="Website" type="success" />,
					<Badge key={2} title="ReactJS" type="warning" />,
					<Badge key={3} title="Typescript" type="secondary" />,
				]}
				websiteLink="https://thejaviertc.github.io/twitch-stats/"
				githubLink="https://github.com/thejaviertc/twitch-stats"
				position="left"
			/>
		);
		expect(screen.getByText(/Twitch Data/));
		expect(screen.getByText(/followers/));
		expect(screen.getByText(/Typescript/));
	});

	test("Renders correctly on right side", () => {
		render(
			<Project
				title="Steam Workshop Stats"
				description="See the views, subscriptions and favs of your Steam Workshop addons!"
				image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/public/img/steam-workshop-stats.jpg"
				badges={[
					<Badge key={1} title="Website" type="success" />,
					<Badge key={2} title="ReactJS" type="warning" />,
					<Badge key={3} title="Typescript" type="secondary" />,
				]}
				websiteLink="https://thejaviertc.github.io/steam-workshop-stats/"
				githubLink="https://github.com/thejaviertc/steam-workshop-stats"
				position="right"
			/>
		);
		expect(screen.getByText(/Steam Workshop Stats/));
		expect(screen.getByText(/subscriptions/));
		expect(screen.getByText(/ReactJS/));
	});
});
