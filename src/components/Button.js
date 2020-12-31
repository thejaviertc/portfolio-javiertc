// Basic
import React, { Component } from "react";

// Button Component
class Button extends Component {
    render() {
        return (
            <a className="btn btn-info mx-2" href={this.props.link} role="button"><i className={this.props.icon}></i> {this.props.text}</a>
        );
    }
}

export default Button;