import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import "./styles.css";
import port from '../../images/port.png';

class Portfolio extends Component{
    render(){
        return (
        <section id="portfolio">
            <h1 id="title-port">Portfólio</h1>
            <div id="div-port">
                <div className="projs">
                    <a href="https://github.com/junicola/ProjetoJavaDesktop" target="_blank">
                    <Image src={port} id="img-port"/>
                    <p>Projeto Java Desktop</p>
                </a>
                </div>
                <div className="projs">
                    <a href="https://github.com/junicola/Sistema-Gerenciador-de-Rep" target="_blank">
                    <Image src={port} id="img-port"/>
                    <p>Sistema Gerenciador de Rep</p>
                </a>
                </div>
                <div className="projs">
                    <a href="https://github.com/junicola/dctb-utfpr-2019-1-web/tree/master/if66h-es61/t01/julia-nicola" target="_blank">
                    <Image src={port} id="img-port"/>
                    <p>Trabalho de Web 1</p>
                </a>
                </div>
            </div>
            
        </section>
        );
    }
}

export default Portfolio;