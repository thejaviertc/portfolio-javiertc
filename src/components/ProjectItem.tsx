// Basic
import { Component } from "react";

// Components
import Badge from "./Badge";
import Button from "./Button";

// Props Interface
interface ProjectItemProps {
    position: string,
    title: string,
    desc: string,
    badge: string,
    type: string,
    websitelink: string,
    githublink: string,
    image: string
}

// ProjectItem Component
class ProjectItem extends Component<ProjectItemProps> {
    render() {
        if (this.props.position === '1') {
            return (
                <div className="row py-4">
                    <div className="col-12 col-md-6">
                        <h3 className="text-center text-md-left">{this.props.title}</h3>
                        <p className="text-center text-md-left"><Badge text={this.props.badge} type={this.props.type} /></p>
                        <h4 className="text-center text-md-left py-3">{this.props.desc}</h4>
                        <div className="d-flex justify-content-center pt-3">
                            <Button text="Live Website" icon="fa-solid fa-wifi" link={this.props.websitelink} />
                            <Button text="Repository" icon="fa-brands fa-github" link={this.props.githublink} />
                        </div>
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
                        <p className="text-center text-md-left"><Badge text={this.props.badge} type={this.props.type} /></p>
                        <h4 className="text-center text-md-left py-3">{this.props.desc}</h4>
                        <div className="d-flex justify-content-center pt-3">
                            <Button text="Live Website" icon="fa-solid fa-wifi" link={this.props.websitelink} />
                            <Button text="Repository" icon="fa-brands fa-github" link={this.props.githublink} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ProjectItem;