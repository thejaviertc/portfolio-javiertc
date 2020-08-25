import React, { Component } from "react";
// import Badge from "./Badge";

class Community extends Component {
    render() {
        const communities = [
            {
                name: "Capitol Games",
                time: "3 meses",
                badges: [
                    <a className="badge badge-primary mx-1 text-white"><i className="fas fa-gavel"></i> Moderador</a>
                ]
            },
            {
                name: "CrewDark",
                time: "3 meses",
                badges: [
                    <a className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Administrador</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>
                ]
            },
            {
                name: "Realiacity",
                time: "1 año",
                badges: [
                    <a className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado SV</a>,
                    <a className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Superadmin</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>
                ]
            },
            {
                name: "RoyalGaming",
                time: "7 meses",
                badges: [
                    <a className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Superadmin</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>
                ]
            },
            {
                name: "PSF",
                time: "5 meses",
                badges: [
                    <a className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado Staff</a>,
                    <a className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Superadmin</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>
                ]
            },
            {
                name: "Liberty Servers",
                time: "11 meses",
                badges: [
                    <a className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Fundador</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>,
                    <a className="badge badge-primary mx-1 my-1 text-white"><i className="fas fa-code"></i> Programador</a>
                ]
            },
            {
                name: "Scabb",
                time: "2 meses",
                badges: [
                    <a className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado PrisonRP</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>,
                    <a className="badge badge-primary mx-1 my-1 text-white"><i className="fas fa-code"></i> Programador</a>
                ]
            },
            {
                name: "Cosa Nostra",
                time: "3 meses",
                badges: [
                    <a className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado DarkRP</a>,
                    <a className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</a>,
                    <a className="badge badge-primary mx-1 my-1 text-white"><i className="fas fa-code"></i> Programador</a>
                ]
            }
        ];

        const communityList = communities.map((community, i) =>
            <article key={'community_' + i} className="col-12 col-lg-6 mb-3 mb-lg-0 pb-3 text-center">
                <div className="card bg-primary">
                    <div className="card-body">
                        <h4 className="card-title text-white">{community.name}: {community.time}</h4>
                        <h5>
                            {community.badges}
                        </h5>
                    </div>
                </div>
            </article>
        );

        return (
            <div className="col-12 col-md-8 pb-5 animation_third">
                <div className="container border-container p-3">
                    <h1 className="text-center text-md-left">Experiencia en Garry's Mod:</h1>
                    <hr />
                    <div className="row">
                        {communityList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Community;