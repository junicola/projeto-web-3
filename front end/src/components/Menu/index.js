import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import icon from '../../images/heart.png';

import "./styles.css";

class Menu extends Component {
    render(){
        return (            
            <Navbar bg="dark" variant="dark" id="nav">
                <Image src={icon} id="img-icon" />
                <Navbar.Brand href="#home" id="title">Júlia Nicola Gualeve</Navbar.Brand>
                <Nav id="nav-link">
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#portfolio">Portfólio</Nav.Link>
                    <Nav.Link href="#biografia">Biografia</Nav.Link>
                    <Nav.Link href="#form">Contato</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;