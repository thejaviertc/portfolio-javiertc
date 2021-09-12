// Basic
import React, { Component } from "react";

// Images
import cssImg from "../img/css3.svg";
import javaImg from "../img/java.svg";

// Components
import ExperienceItem from "./ExperienceItem";

// Experience Component
class Experience extends Component {
    render() {
        return (
            <section id="experience" className="bg-secondary py-5">
                <div className="container">
                    <h2 className="text-center">Experience</h2>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5">
                            <h3 className="text-center pt-5 pb-3">Frontend</h3>
                            <div className="row">
                                <ExperienceItem column="col-6" text="HTML" img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" width="85%" type="success" />
                                <ExperienceItem column="col-6" text="CSS" img={cssImg} width="50%" type="warning" />
                                <ExperienceItem column="col-6" text="Bootstrap" img="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="45%" type="warning" />
                                <ExperienceItem column="col-6" text="ReactJS" img="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" width="35%" type="warning" />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <h3 className="text-center pt-5 pb-3">Programming</h3>
                            <div className="row">
                                <ExperienceItem column="col-6" text="Java" img={javaImg} width="35%" type="warning" />
                                <ExperienceItem column="col-6" text="NodeJS" img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="25%" type="danger" />
                                <ExperienceItem column="col-6" text="C#" img="https://cdnlogo.com/logos/c/27/c.svg" width="25%" type="danger" />
                                <ExperienceItem column="col-6" text="Express" img="https://upload.wikimedia.org/wikipedia/commons/b/b7/Express%2C_Inc._logo.svg" width="10%" type="danger" />
                            </div>
                        </div>
                        <div className="col-12">
                            <h3 className="text-center pt-5 pb-3">Tools</h3>
                            <div className="row">
                                <ExperienceItem column="col-6 col-md-4" text="Linux" img="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" width="35%" type="warning" />
                                <ExperienceItem column="col-6 col-md-4" text="Git" img="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" width="30%" type="warning" />
                                <ExperienceItem column="col-6 col-md-4" text="Adobe Photoshop" img="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" width="25%" type="danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;