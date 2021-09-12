// Basic
import React, { Component } from "react";

// Components
import ProjectItem from "./ProjectItem";

// Project Component
class Project extends Component {
    render() {
        return (
            <section id="projects" className="bg-primary py-5">
                <div className="container">
                    <h2 className="text-center">Projects</h2>
                    <ProjectItem position='0' title="Twitch Data" desc="See the views and followers of your favourite Twitch Streamers!" badge="ReactJS" type="warning" websitelink="https://thejaviertc.github.io/twitch-stats/" githublink="https://github.com/thejaviertc/twitch-stats" image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/src/img/github/twitch-stats.jpg" />
                    <ProjectItem position='1' title="Steam Workshop Stats" desc="See the views, subscriptions and favs of your Steam Workshop addons!" badge="NodeJS" type="success" websitelink="https://thejaviertc.github.io/steam-workshop-stats/" githublink="https://github.com/thejaviertc/steam-workshop-stats" image="https://raw.githubusercontent.com/thejaviertc/portfolio-javiertc/main/src/img/github/steam-workshop-stats.jpg" />
                </div>
            </section>
        );
    }
}

export default Project;