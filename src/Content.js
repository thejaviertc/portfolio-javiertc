import React, { Component } from "react";
import Community from "./components/Community";
import Abilities from "./components/Abilities";
import Projects from "./components/Projects";

class Content extends Component {
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

export default Content;