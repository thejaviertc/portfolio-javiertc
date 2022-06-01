import React from "react";

// Props Interface
interface ButtonProps {
	link: string;
	icon: string;
	text: string;
}

// Button Component
class Button extends React.Component<ButtonProps> {
	render() {
		return (
			<a
				className="btn btn-secondary mx-2"
				href={this.props.link}
				role="button"
			>
				<i className={this.props.icon}></i> {this.props.text}
			</a>
		);
	}
}

export default Button;
