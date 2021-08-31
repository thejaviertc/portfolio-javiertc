// Basic
import React, { Component } from "react";

// Badge Component
class Badge extends Component {
    render() {
        return (
            <span className={"badge bg-" + this.props.type + " mx-1 my-1 text-white"}><i className="fas fa-code"></i> {this.props.text}</span>
        );
    }
}

export default Badge;