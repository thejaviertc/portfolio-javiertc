// Basic
import React, { Component } from "react";

// Components
import Badge from "./Badge";
import Button from "./Button";

// ProjectItem Component
class ProjectItem extends Component {
    render() {
        if (this.props.position === '1') {
            return (
                <div className="row py-4">
                    <div className="col-12 col-md-6">
                        <h3 className="text-center text-md-left">{this.props.title}</h3>
                        <Badge text={this.props.badge} type={this.props.type} />
                        <h4 className="text-center text-md-left py-3">{this.props.desc}</h4>
                        <Button text="Repositorio" icon="fab fa-github" link={this.props.link} />
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <img className="img-fluid" src={this.props.image} alt="Imagen" />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row py-4">
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <img className="img-fluid" src={this.props.image} alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="text-center text-md-left">{this.props.title}</h3>
                        <Badge text={this.props.badge} type={this.props.type} />
                        <h4 className="text-center text-md-left py-3">{this.props.desc}</h4>
                        <Button text="Repositorio" icon="fab fa-github" link={this.props.link} />
                    </div>
                </div>
            );
        }
    }
}

export default ProjectItem;