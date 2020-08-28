// Basic
import React, { Component } from "react";

// Components
import Community from "./components/Community";
import Abilities from "./components/Abilities";
import Projects from "./components/Projects";

// Content Component
class HomeContent extends Component {
    render() {
        return (
            <section id="community" className="py-5">
                <div className="container">
                    <div className="row">
                        <Community />
                        <Abilities />
                        <Projects />
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeContent;