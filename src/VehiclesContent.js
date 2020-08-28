// Basic
import React, { Component } from "react";

// Content Component
class VehiclesContent extends Component {
    render() {
        const vehicles = [
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] BMW X5 Samur VIR:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional:",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            }
        ];

        const vehiclesList = vehicles.map((vehicle, i) =>
            <article key={'vehicle_' + i} className="mb-3 mb-lg-0 pb-3">
                <div className="card bg-primary">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-4 d-none d-lg-block">
                                <img class="img-fluid" alt="Imagen de Vehículo" src={vehicle.image} />
                            </div>
                            <div class="col-12 col-md-8 text-center text-md-left">
                                <h4 class="card-title text-white">{vehicle.name}</h4>
                                <h5>
                                    {vehicle.badges}
                                </h5>
                                <p>{vehicle.text}</p>
                                <a class="btn btn-primary mx-2" href={vehicle.link} role="button"><i class="fab fa-steam"></i> Descargar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
        return (
            <section id="vehicles" className="py-5">
                <div className="container">
                    <div className="row">
                        <div class="col-12 animation_down">
                            <div class="container border-container p-3">
                                <h1 class="text-center text-md-left">Lista de Vehículos:</h1>
                                <hr />
                                {vehiclesList}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VehiclesContent;