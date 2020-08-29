// Basic
import React, { Component } from "react";

// Content Component
class VehiclesContent extends Component {
    render() {
        const vehicles = [
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1295297235777782769/0A3CD825BD355C02ED9D195F4553210865BB148F/",
                name: "[Photon] Toyota Land Cruiser Policía Nacional",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2143878031"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/965368099202458967/56707D380FFBC5A625C490BE252DD9AEF5B2C4E2/",
                name: "[Photon] BMW X5 Samur VIR",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SAMUR</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1707130373"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/965368099197887403/BEC5495460B1AF7F3EA93499BCD3992027DD2E90/",
                name: "[Photon] Mercedes Sprinter SWB Samur SVA",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SAMUR</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1706110647"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1012690533794449291/1D89CF79522816D5F9522A41A0C50EADD982CD33/",
                name: "[Photon] Citroën C4 Policía Nacional",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1706097473"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1012690533794451730/C51AEC534865EC3A0B3E482B955A463B1BB85E0A/",
                name: "[Photon] Mercedes V-Class Policía Nacional UPR",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1591399382"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109187228/01C625BB37087C36E9B5C938903613471596F0AF/",
                name: "[Photon] Mercedes Sprinter SWB Mossos d'Esquadra",
                badges: [
                    <span class="badge badge-dark text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Otros</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586644047"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109176118/076BCE926476E783E249820141BA0B7A65F41BDE/",
                name: "[Photon] Mercedes Sprinter SWB PC Alcobendas",
                badges: [
                    <span class="badge badge-dark text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Otros</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586640869"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109161553/006CEC904D2C1EF9FEBA2C859C2F5AFB2354B146/",
                name: "[Photon] Mercedes V-Class Guardia Civil de Tráfico",
                badges: [
                    <span class="badge badge-success text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Guardia Civil</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586636847"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109142183/E5305EB176F923146AF808F32CCEDC89468B84C3/",
                name: "[Photon] Chevrolet Tahoe Summa 112 VIR",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SUMMA 112</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586630442"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/922554680995449233/4CD9D168A3420D1F9CA063640C9989B24D55558F/",
                name: "[Photon] Ford Focus Policia Municipal Madrid",
                badges: [
                    <span class="badge badge-info text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía de Madrid</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1391291513"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/924805934473101644/409E3ABC39E5AB36C4AE179305855D68A9753E3C/",
                name: "[Photon] Peugeot 308 Bescam Getafe",
                badges: [
                    <span class="badge badge-dark text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Otros</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1384845390"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105741782/730ECB9EE77DA5C531746553947AB67A701F64BB/",
                name: "[Photon] Tanqueta CNP UIP",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1344898873"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1012690533794455105/7139E373B0737B140B6C3BAE3412C6027D54145C/",
                name: "[Photon] Hummer CNP URO UIP",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1343453090"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/928178542937593457/6F3B512551D7F0949252F3C748E7ACD75830B6A6/",
                name: "[Photon] Ford F350 Emerxencias Sanitarias",
                badges: [
                    <span class="badge badge-dark text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Otros</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1129397431"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1012690533794456825/D9C9D03275A42117AFC974D0F99A94176749E531/",
                name: "[Photon] Hummer CNP GEO",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=951097085"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/928178542937581235/1ACB458FBC9834EC40DA226CE0831B6617B5DF8C/",
                name: "[Photon] BMW M6 Policia Municipal Madrid",
                badges: [
                    <span class="badge badge-info text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía de Madrid</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=856663574"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105633461/25F026979AC5C0B188E93C7B29A9D08D23E9C35E/",
                name: "[Photon] Ford F350 Samur",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SAMUR</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=856264732"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/1012690533794458905/EC171F3F2FE0B95B695FCB502063FABF792E5669/",
                name: "[Photon] Chevrolet Tahoe Policia Nacional",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=856202832"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105631856/B72DD0F813359333F6D1D3D0B7ED186D275658B0/",
                name: "[Photon] Mercedes Sprinter SWB Cruz Roja",
                badges: [
                    <span class="badge badge-dark text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Otros</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=851871971"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/928178542937586694/D1D84BA92B9374CFC9153975466E458888828C4B/",
                name: "[Photon] Mercedes Sprinter SWB Atencion Ciudadana Madrid",
                badges: [
                    <span class="badge badge-info text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía de Madrid</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=851569336"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104896272/464DCA77DDE9D5D747BE8AB19C26731021B960DF/",
                name: "[Photon] Scania Truck Bomberos Madrid",
                badges: [
                    <span class="badge badge-dark text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Otros</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=843988439"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104846695/9337BF9BAA6A82D77CF9FA0DCBDA3659972FADD7/",
                name: "[Photon] Porsche Cayenne S URE Samur",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SAMUR</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=835525732"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/874125736125954048/24EB582C6F1816BAE9D2BE796BE060E60C462E8E/",
                name: "[Photon] Mercedes Sprinter SWB CNP UIP",
                badges: [
                    <span class="badge badge-primary text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía Nacional</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=820160895"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/914659215895517042/8A92BDD9381BEC5637EF936AD6B942B15F08295F/",
                name: "[Photon] Mercedes Sprinter SWB Summa 112",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SUMMA 112</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=819453573"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104791900/B376EAB51E5814595DFEEC68AB83C130F6CFF4FD/",
                name: "[Photon] Renault Megane Policia Municipal de Madrid",
                badges: [
                    <span class="badge badge-info text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Policía de Madrid</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=766496731"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/922554680992495736/0CC9B979F1C80CDDB0B4F26CDE6EC09D32938A97/",
                name: "[Photon] Ambulancia Samur Madrid",
                badges: [
                    <span class="badge badge-warning text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> SAMUR</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=766115310"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/928178542943497693/268072944315C2F399E5C935A5A522F3831D8FB6/",
                name: "[Photon] Chevrolet Tahoe Guardia Civil",
                badges: [
                    <span class="badge badge-success text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Guardia Civil</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=746885345"
            },
            {
                image: "https://steamuserimages-a.akamaihd.net/ugc/928178542943493564/CA43AFC63CA4C094A9A75D5FD913183DADB404AF/",
                name: "[Photon] Renault Megane Guardia Civil",
                badges: [
                    <span class="badge badge-success text-white mx-1 my-1 text-white"><i class="fas fa-car-side" aria-hidden="true"></i> Guardia Civil</span>
                ],
                link: "https://steamcommunity.com/sharedfiles/filedetails/?id=746402915"
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
                                <h4 class="card-title text-white">{vehicle.name}:</h4>
                                <h5>
                                    {vehicle.badges}
                                </h5>
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