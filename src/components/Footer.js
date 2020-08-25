// Basic
import React, { Component } from "react";

// Footer Component
class Footer extends Component {
    render() {
        return (
            <section id="footer" class="py-5 animation_down">
                <div class="container text-center">
                    <p class="h3">Copyright &copy; 2020 - Todos los derechos reservados</p>
                    <p class="h3">Hecho por <a href="https://steamcommunity.com/id/javiertc"><b><u>Javiertc</u></b></a></p>
                </div>
            </section>
        );
    }
}

export default Footer;