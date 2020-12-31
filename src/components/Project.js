// Basic
import React, { Component } from "react";

// Components
import Hr from "./Hr";
import ProjectItem from "./ProjectItem";

// Project Component
class Project extends Component {
    render() {
        return (
            <section id="projects" className="bg-primary py-5">
                <div className="container">
                    <h2 className="text-center">Proyectos<Hr width="280px" /></h2>
                    <ProjectItem position='1' title="Steam Workshop Stats" desc="Web hecha para que la gente introduzca su perfil de Steam, y le devuelva una lista con todos los addons que hayan publicado y sus estadísticas, como las visitas, favoritos... Además podrá ver las estadísticas totales." badge="NodeJS" type="success" link="https://github.com/thejaviertc/steam-workshop-stats" image="https://thejaviertc.github.io/portfolio-javiertc/static/media/steamstats.c83daab1.png" />
                    <ProjectItem position='0' title="Vehículos de Emergencias" desc="Vehículos de Emergencias de España, para que las comunidades de Garry's Mod de Roleplay tengan una gran variedad de vehículos de emergencias españoles." badge="Diseño" type="primary" link="https://steamcommunity.com/id/javiertc/myworkshopfiles/?appid=4000" image="https://thejaviertc.github.io/portfolio-javiertc/static/media/emergencias.0fa0c5e0.jpg" />
                </div>
            </section>
        );
    }
}

export default Project;