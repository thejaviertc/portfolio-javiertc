import React, { Component } from "react";

class Badge extends Component {
    render() {
        return (
            <a className="badge badge-primary mx-1 text-white"><i className="fas fa-gavel"></i> Moderador</a>
        );
    }
}

export default Badge;