// Basic
import { Component } from "react";

// Components
import Button from "../components/Button";
import ExperienceItem from "../components/ExperienceItem";
import ProjectItem from "../components/ProjectItem";

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="header" className="fullpage bg-primary">
                    <div className="container">
                        <h1 className="text-center">Javiertc <i className="fa-solid fa-code"></i></h1>
                        <h2 className="text-center">Software Engineering Student</h2>
                        <div className="d-flex justify-content-center pt-3">
                            <Button text="Github" icon="fa-brands fa-github" link="https://github.com/thejaviertc" />
                            <Button text="Twitter" icon="fa-brands fa-twitter" link="https://twitter.com/javiertcesp" />
                            <Button text="Steam" icon="fa-brands fa-steam" link="https://steamcommunity.com/id/javiertc/" />
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                            <a className="btn btn-secondary mx-2" href="#experience" role="button">Let's Go <i className="fa-solid fa-angle-down"></i></a>
                        </div>
                    </div>
                </section>
                <section id="experience" className="bg-secondary py-5">
                    <div className="container">
                        <h2 className="text-center">Experience</h2>
                        <div className="row justify-content-between">
                            <div className="col-12 col-md-5">
                                <h3 className="text-center pt-5 pb-3">Frontend</h3>
                                <div className="row">
                                    <ExperienceItem column="col-6" text="HTML" img="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" width="85%" type="success" />
                                    <ExperienceItem column="col-6" text="CSS" img="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" width="50%" type="warning" />
                                    <ExperienceItem column="col-6" text="Bootstrap" img="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="45%" type="warning" />
                                    <ExperienceItem column="col-6" text="Javascript" img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="45%" type="warning" />
                                    <ExperienceItem column="col-6" text="ReactJS" img="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" width="35%" type="warning" />
                                    <ExperienceItem column="col-6" text="SCSS" img="https://cdn.worldvectorlogo.com/logos/sass-1.svg" width="25%" type="danger" />
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <h3 className="text-center pt-5 pb-3">Programming</h3>
                                <div className="row">
                                    <ExperienceItem column="col-6" text="Java" img="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" width="45%" type="warning" />
                                    <ExperienceItem column="col-6" text="Typescript" img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="25%" type="danger" />
                                    <ExperienceItem column="col-6" text="NodeJS" img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="25%" type="danger" />
                                    <ExperienceItem column="col-6" text="C#" img="https://cdnlogo.com/logos/c/27/c.svg" width="25%" type="danger" />
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <h3 className="text-center pt-5 pb-3">Databases</h3>
                                <div className="row">
                                    <ExperienceItem column="col-6" text="SQL" img="https://www.logo.wine/a/logo/Oracle_SQL_Developer/Oracle_SQL_Developer-Logo.wine.svg" width="45%" type="warning" />
                                    <ExperienceItem column="col-6" text="MySQL" img="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" width="30%" type="warning" />
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                <h3 className="text-center pt-5 pb-3">Tools</h3>
                                <div className="row">
                                    <ExperienceItem column="col-6" text="Linux" img="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" width="35%" type="warning" />
                                    <ExperienceItem column="col-6" text="MySQL Workbench" img="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" width="35%" type="warning" />
                                    <ExperienceItem column="col-6" text="Git" img="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" width="30%" type="warning" />
                                    <ExperienceItem column="col-6" text="Adobe Photoshop" img="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" width="25%" type="danger" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects" className="bg-primary py-5">
                    <div className="container">
                        <h2 className="text-center">Projects</h2>
                        <ProjectItem position='0' title="Twitch Data" desc="See the views and followers of your favourite Twitch Streamers!" badge="ReactJS" type="warning" websitelink="https://thejaviertc.github.io/twitch-stats/" githublink="https://github.com/thejaviertc/twitch-stats" image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/public/img/twitch-stats.jpg" />
                        <ProjectItem position='1' title="Steam Workshop Stats" desc="See the views, subscriptions and favs of your Steam Workshop addons!" badge="ReactJS" type="warning" websitelink="https://thejaviertc.github.io/steam-workshop-stats/" githublink="https://github.com/thejaviertc/steam-workshop-stats" image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/public/img/steam-workshop-stats.jpg" />
                    </div>
                </section>
            </div>
        );
    }
}