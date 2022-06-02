import React from "react";

interface ButtonProps {
	icon: JSX.Element;
	text: string;
	link: string;
}

/**
 * Bootstrap button component
 */
class Button extends React.Component<ButtonProps> {
	render() {
		return (
			<a
				className="btn btn-secondary mx-2"
				href={this.props.link}
				role="button"
			>
				{this.props.icon} {this.props.text}
			</a>
		);
	}
}

export default Button;
