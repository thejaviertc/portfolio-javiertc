// Basic
import { Component } from "react";

// Props Interface
interface ButtonProps {
    link: string,
    icon: string,
    text: string
}

// Button Component
class Button extends Component<ButtonProps> {
    render() {
        return (
            <a className="btn btn-info mx-2" href={this.props.link} role="button"><i className={this.props.icon}></i> {this.props.text}</a>
        );
    }
}

export default Button;