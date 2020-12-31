// Basic
import React, { Component } from "react";

// Images
import cImg from "../img/clang.svg";
import javaImg from "../img/java.svg";

// Components
import Hr from "./Hr";
import ExperienceItem from "./ExperienceItem";

// Experience Component
class Experience extends Component {
    render() {
        return (
            <section id="experience" className="bg-secondary py-5">
                <div className="container">
                    <h2 className="text-center">Experiencia<Hr width="300px" /></h2>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5">
                            <h3 className="text-center pt-5 pb-3">Frontend<Hr width="200px" /></h3>
                            <div className="row">
                                <ExperienceItem column="col-6" text="HTML" img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" width="75%" type="success" />
                                <ExperienceItem column="col-6" text="CSS" img="https://codingcolorado.com/public/images/web-icons/css3.svg" width="50%" type="warning" />
                                <ExperienceItem column="col-6" text="Bootstrap" img="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="50%" type="warning" />
                                <ExperienceItem column="col-6" text="JavaScript" img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="25%" type="danger" />
                                <ExperienceItem column="col-12" text="ReactJS" img="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" width="25%" type="danger" />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <h3 className="text-center pt-5 pb-3">Programación<Hr width="290px" /></h3>
                            <div className="row">
                                <ExperienceItem column="col-6" text="C" img={cImg} width="50%" type="warning" />
                                <ExperienceItem column="col-6" text="NodeJS" img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="50%" type="warning" />
                                <ExperienceItem column="col-6" text="Java" img={javaImg} width="25%" type="danger" />
                                <ExperienceItem column="col-6" text="Express" img="https://upload.wikimedia.org/wikipedia/commons/b/b7/Express%2C_Inc._logo.svg" width="25%" type="danger" />
                            </div>
                        </div>
                        <div className="col-12">
                            <h3 className="text-center pt-5 pb-3">Herramientas<Hr width="290px" /></h3>
                            <div className="row">
                                <ExperienceItem column="col-6" text="Bash" img="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" width="50%" type="warning" />
                                <ExperienceItem column="col-6" text="Linux" img="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" width="25%" type="danger" />
                                <ExperienceItem column="col-6" text="Git" img="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" width="25%" type="danger" />
                                <ExperienceItem column="col-6" text="Adobe Photoshop" img="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" width="25%" type="danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;