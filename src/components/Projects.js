// Basic
import React, { Component } from "react";

// Images
import steamStatsImg from "../img/steamstats.png";
import gmodEspanaImg from "../img/gmodespana.jpg";
import policePdImg from "../img/policepd.png";
import cosaNostraImg from "../img/webcosanostra.png";
import discordBotImg from "../img/discordbot.png";
import emergenciasImg from "../img/emergencias.jpg";
import Badge from "./Badge";

// Projects Component
class Projects extends Component {
    render() {
        const projects = [
            {
                image: steamStatsImg,
                name: "Steam Workshop",
                badges: {
                    color:"badge-danger",
                    icon: "fas fa-code",
                    text: "WIP"
                },
                text: "Web hecha para que la gente introduzca su perfil de Steam, y le devuelva una lista con todos los addons que hayan publicado y sus estadísticas, como las visitas, favoritos... Además podrá ver las estadísticas totales",
                link: "https://github.com/thejaviertc/steam-workshop-stats"
            },
            {
                image: gmodEspanaImg,
                name: "Garry's Mod España",
                badges: {
                    color:"badge-danger",
                    icon: "fas fa-code",
                    text: "WIP"
                },
                text: "La intención de este proyecto es unir a la comunidad de Garry's Mod de España, para lograr servidores de mejor calidad, dar a conocer a nuevos servidores, un listado de todos los servidores y luchar contra las malas prácticas que se utilizan.",
                link: "https://github.com/thejaviertc/gmodespana"
            },
            {
                image: policePdImg,
                name: "Base de Datos Policial",
                badges: {
                    color:"badge-success",
                    icon: "fas fa-code",
                    text: "NodeJS"
                },
                text: "Web hecha para aprendizaje propio, en Garry's Mod. Su función es la de dirigir un departamento de policía en web, con lista de agentes, búsquedas y capturas, antecedentes...",
                link: "https://github.com/thejaviertc/police-pd"
            },
            {
                image: cosaNostraImg,
                name: "Web Cosa Nostra",
                badges: {
                    color:"badge-info",
                    icon: "fas fa-code",
                    text: "HTML"
                },
                text: "Web hecha para Cosa Nostra, en el que encontrabas el tráiler del servidor, información, guías...",
                link: "https://github.com/thejaviertc/web-cosa-nostra"
            },
            {
                image: discordBotImg,
                name: "Bot de Discord",
                badges: {
                    color:"badge-success",
                    icon: "fas fa-code",
                    text: "NodeJS"
                },
                text: "Bot de Discord hecho para Cosa Nostra, el cual su función es dar autosoporte a la gente, indicar la cantidad de personas jugando al servidor y nuevos comandos para hacer un chat IC en el propio Discord como /twitter, /policía, /ems, /ayuntamiento...",
                link: "https://github.com/thejaviertc/discord-bot"
            },
            {
                image: emergenciasImg,
                name: "Vehículos de Emergencias",
                badges: {
                    color:"badge-primary",
                    icon: "fas fa-code",
                    text: "Diseño"
                },
                text: "Vehículos de Emergencias de España, para que las comunidades de Garry's Mod de Roleplay tengan una gran variedad de vehículos de emergencias españoles.",
                link: "/portfolio-javiertc/vehiculos"
            }
        ];

        const projectsList = projects.map((project, i) =>
            <article key={'project_' + i} className="mb-3 mb-lg-0 pb-3">
                <div className="card bg-primary">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-4 d-none d-lg-block">
                                <img class="img-fluid" alt="Imagen de Proyecto" src={project.image} />
                            </div>
                            <div class="col-12 col-md-8 text-center text-md-left">
                                <h4 class="card-title text-white">{project.name}:</h4>
                                <h5>
                                    <Badge color={project.badges.color} icon={project.badges.icon} text={project.badges.text} />
                                </h5>
                                <p>{project.text}</p>
                                <a class="btn btn-primary mx-2" href={project.link} role="button"><i class="fas fa-project-diagram"></i> Acceso</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );

        return (
            <div class="col-12 animation_down">
                <div class="container border-container p-3">
                    <h1 class="text-center text-md-left">Proyectos:</h1>
                    <hr />
                    {projectsList}
                </div>
            </div>
        );
    }
}

export default Projects;