// Basic
import React, { Component } from "react";

// Abilities Component
class Abilities extends Component {
    render() {
        const abilities = [
            {
                name: "Servidores Garry's Mod",
                type: "success",
                width: 100
            },
            {
                name: "HTML",
                type: "success",
                width: 100
            },
            {
                name: "CSS",
                type: "success",
                width: 80
            },
            {
                name: "Diseño Gráfico",
                type: "warning",
                width: 50
            },
            {
                name: "Javascript",
                type: "warning",
                width: 40
            },
            {
                name: "NodeJS",
                type: "warning",
                width: 40
            },
            {
                name: "ReactJS",
                type: "danger",
                width: 30
            },
            {
                name: "GLua",
                type: "danger",
                width: 20
            }
        ];

        const abilitiesList = abilities.map((skill, i) =>
            <div key={'skill_' + i} className="skillbar pb-3">
                <p className="h5 text-center text-md-left">{skill.name}:</p>
                <div className="progress">
                    <div className={"progress-bar progress-bar-striped progress-bar-animated bg-" + skill.type} role="progressbar" style={{ width: skill.width + '%' }}></div>
                </div>
            </div>
        );

        return (
            <div className="col-12 col-md-4 pb-5 animation_fourth">
                <div className="container border-container p-3">
                    <h1 className="text-center text-md-left">Habilidades:</h1>
                    <hr />
                    {abilitiesList}
                </div>
            </div>
        );
    }
}

export default Abilities;