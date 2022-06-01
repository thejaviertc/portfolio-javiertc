import React from "react";

// Props Interface
interface BadgeProps {
	type: string;
	text: string;
}

// Badge Component
class Badge extends React.Component<BadgeProps> {
	render() {
		return (
			<span
				className={
					"badge bg-" + this.props.type + " mx-1 my-1 text-white"
				}
			>
				<i className="fa-solid fa-code"></i> {this.props.text}
			</span>
		);
	}
}

export default Badge;
