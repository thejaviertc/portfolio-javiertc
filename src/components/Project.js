// Basic
import React, { Component } from "react";

// Images
import twitchImg from "../img/projects/twitch_data.jpg";
import steamStatsImg from "../img/projects/steamstats.jpg";

// Components
import Hr from "./Hr";
import ProjectItem from "./ProjectItem";

// Project Component
class Project extends Component {
    render() {
        return (
            <section id="projects" className="bg-primary py-5">
                <div className="container">
                    <h2 className="text-center">Projects<Hr width="240px" /></h2>
                    <ProjectItem position='0' title="Twitch Data" desc="Website made for people to introduce a Twitch Streamer, and return information about the streamer, such as his followers, the type of streamer, statistics of his videos..." badge="ReactJS" type="warning" link="https://github.com/thejaviertc/twitch-data" image={twitchImg} />
                    <ProjectItem position='1' title="Steam Workshop Stats" desc="Website made for people to enter their Steam profile, and return a list with all the addons they have published and their statistics, such as visits, favorites ... You can also see the total statistics." badge="NodeJS" type="success" link="https://github.com/thejaviertc/steam-workshop-stats" image={steamStatsImg} />
                </div>
            </section>
        );
    }
}

export default Project;