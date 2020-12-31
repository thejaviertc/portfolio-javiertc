// Basic
import React, { Component } from "react";

// Hr Component
class Hr extends Component {
    render() {
        return (
            <hr style={{ width: this.props.width }} />
        );
    }
}

export default Hr;