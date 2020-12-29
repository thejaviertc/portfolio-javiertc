// Basic
import React, { Component } from "react";

// Components
import Abilities from "./components/Abilities";
import About from "./components/About";
import Community from "./components/Community";
import Projects from "./components/Projects";

// Content Component
class HomeContent extends Component {
    render() {
        return (
            <section id="community" className="py-5">
                <div className="container">
                    <div className="row">
                        <About />
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