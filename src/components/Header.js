// Basic
import React, { Component } from "react";

// Components
import Button from "./Button";

// Header Component
class Header extends Component {
    render() {
        return (
            <section id="header" className="bg-primary">
                <div className="container">
                    <h1 className="text-center">Javiertc <i className="fas fa-code"></i></h1>
                    <h2 className="text-center">Software Engineering Student</h2>
                    <div className="d-flex justify-content-center pt-3">
                        <Button text="Github" icon="fab fa-github" link="https://github.com/thejaviertc" />
                        <Button text="Twitter" icon="fab fa-twitter" link="https://twitter.com/thejaviertc" />
                        <Button text="Steam" icon="fab fa-steam" link="https://steamcommunity.com/id/javiertc/" />
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                        <a className="btn btn-info mx-2" href="#experience" role="button">See my work <i className="fas fa-arrow-down"></i></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;