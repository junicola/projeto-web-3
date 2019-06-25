import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';
import "./styles.css";
import profile from '../../images/profile.png';


class Home extends Component {
    render() {
        return (
            <section id="home">
                    <div id="color"> 
                        <h1 id="title-home">Sobre mim</h1>
                        <Image src={profile} id="img-profile" />
                        <div id="mini-bio">
                            <p>Me chamo Júlia Nicola Gualeve, tenho 21 anos, nasci dia 31 de Outubro (Halloween ♥) na cidade de Marília, localizada no interior do estado de São Paulo. Atualmente moro em Cornélio Procópio, no estado do Paraná e estou cursando
                            Engenharia de Software na UTFPR.
                            </p>
                        </div>
                        <a href="../../doc/Currículo.pdf" download>
                            <Button variant="outline-light">CURRÍCULO PDF</Button>
                        </a>
                    </div>
            </section>
        );
    }
}

export default Home;