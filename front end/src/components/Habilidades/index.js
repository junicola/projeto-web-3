import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./styles.css";

class Habilidades extends Component{
    render(){
        return (
            <section id="habilidades">
                <h1 id="title-hab">Habilidades</h1>
                <div id="div-btn"> 
                    <Button variant="outline-light" className="btn">HTML</Button>
                    <Button variant="outline-light" className="btn">CSS</Button>
                    <Button variant="outline-light" className="btn">GIT</Button>
                    <Button variant="outline-light" className="btn">C</Button>
                    <Button variant="outline-light" className="btn">C++</Button>
                    <Button variant="outline-light" className="btn">JAVA</Button>
                    <Button variant="outline-light" className="btn">SQL</Button>
                    <Button variant="outline-light" className="btn">UML</Button>
                    <Button variant="outline-light" className="btn">ADOBE XD</Button>
                </div>
                 
            </section>
        );
    }
}

export default Habilidades;