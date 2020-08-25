import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <section id="header" className="py-5">
                <div className="container">
                    <h1 className="display-3 text-center animation_first">Javiertc <i className="fas fa-code"></i></h1>
                    <h1 className="display-5 text-center animation_first">Estudiante de Ingeniería de Software</h1>
                    <div className="d-flex justify-content-center pt-3">
                        <a className="btn btn-primary mx-2 animation_buttonone" href="https://steamcommunity.com/id/javiertc/" role="button"><i className="fab fa-steam"></i> Steam</a>
                        <a className="btn btn-primary mx-2 animation_buttontwo" href="https://twitter.com/thejaviertc" role="button"><i className="fab fa-twitter"></i> Twitter</a>
                        <a className="btn btn-primary mx-2 animation_buttonthree" href="https://github.com/thejaviertc" role="button"><i className="fab fa-github"></i> Github</a>
                    </div>
                    <p className="h5 text-center pt-4 animation_second">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quibusdam soluta? Excepturi sit dolorem iusto. Ab nulla nostrum, ratione incidunt sint a debitis, blanditiis commodi corrupti, voluptate natus minus molestiae?</p>
                </div>
            </section>
        );
    }
}

export default Header;