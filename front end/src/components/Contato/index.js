import React, { Component } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import "./styles.css";
import insta from '../../images/insta.png';
import fb from '../../images/fb.png';
import git from '../../images/git.png';

class Contato extends Component{
    render(){
        return (
        <section id="form">
            <div id="color-div">
              <h1 id="title-contato">Entre em contato</h1>
                <div id="cont-div">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control as="textarea" rows="1" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control as="textarea" rows="1" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>

                        <Button variant="outline-dark" type="submit" id="btn1">
                            Enviar
                        </Button>
                    </Form>
                </div>
                <h1 id="title-ft">Minhas redes sociais</h1>
                <div id="social">
                    <a href="https://instagram.com/junicxsz" target="_blank">
                        <Image src={insta} id="img-social"/>
                    </a>
                    <a href="https://facebook.com/junicolagualeve" target="_blank">
                        <Image src={fb} id="img-social"/>
                    </a>
                </div>
                <h1 id="title-ft">Meu GitHub</h1>
                <div id="social">
                    <a href="https://github.com/junicola" target="_blank">
                        <Image src={git} id="img-social"/>
                    </a>
                </div>
            </div>            
           
        </section>
        );
    }
}

export default Contato;