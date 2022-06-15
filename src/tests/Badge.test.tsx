import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "../components/Badge";

describe("Badge Component", () => {
	test("Renders correctly", () => {
		render(<Badge title="ReactJS" type="primary" />);
		expect(screen.getByText(/ReactJS/));
	});
});
