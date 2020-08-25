// Basic
import React, { Component } from "react";

// Community Component
class Community extends Component {
    render() {
        const communities = [
            {
                name: "Capitol Games",
                time: "3 meses",
                badges: [
                    <span className="badge badge-primary mx-1 text-white"><i className="fas fa-gavel"></i> Moderador</span>
                ]
            },
            {
                name: "CrewDark",
                time: "3 meses",
                badges: [
                    <span className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Administrador</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>
                ]
            },
            {
                name: "Realiacity",
                time: "1 año",
                badges: [
                    <span className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado SV</span>,
                    <span className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Superadmin</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>
                ]
            },
            {
                name: "RoyalGaming",
                time: "7 meses",
                badges: [
                    <span className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Superadmin</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>
                ]
            },
            {
                name: "PSF",
                time: "5 meses",
                badges: [
                    <span className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado Staff</span>,
                    <span className="badge badge-success mx-1 my-1 text-white"><i className="fas fa-gavel"></i> Superadmin</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>
                ]
            },
            {
                name: "Liberty Servers",
                time: "11 meses",
                badges: [
                    <span className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Fundador</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>,
                    <span className="badge badge-primary mx-1 my-1 text-white"><i className="fas fa-code"></i> Programador</span>
                ]
            },
            {
                name: "Scabb",
                time: "2 meses",
                badges: [
                    <span className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado PrisonRP</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>,
                    <span className="badge badge-primary mx-1 my-1 text-white"><i className="fas fa-code"></i> Programador</span>
                ]
            },
            {
                name: "Cosa Nostra",
                time: "3 meses",
                badges: [
                    <span className="badge badge-danger mx-1 my-1 text-white"><i className="fas fa-user"></i> Encargado DarkRP</span>,
                    <span className="badge badge-warning mx-1 my-1 text-white"><i className="fas fa-code"></i> Configurador</span>,
                    <span className="badge badge-primary mx-1 my-1 text-white"><i className="fas fa-code"></i> Programador</span>
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