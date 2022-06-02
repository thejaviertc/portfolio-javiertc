import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface BadgeProps {
	title: string;
	type: string;
}

/**
 * Bootstrap badge component
 */
export default class Badge extends React.Component<BadgeProps> {
	render() {
		return (
			<span
				className={
					"badge bg-" + this.props.type + " mx-1 my-1 text-white"
				}
			>
				<FontAwesomeIcon icon={faCode} /> {this.props.title}
			</span>
		);
	}
}
