import React, { Component } from 'react';
import { Card, Image, CardDeck } from 'react-bootstrap';
import "./styles.css";
import blog1 from '../../images/jquery.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';

class Blog extends Component{
    render(){
        return (
            <section id="blog">
                 <div id="div-blog">
                    <h1 id="title-blog">Blog</h1>
                    <div id="cards">
                        <CardDeck>
                            <Card >
                                <a target="_blank" href="https://danillolima.com/javascript/jquery-nao-faz-sentido-para-todo-projeto/">
                                <Card.Img variant="top" src={blog1} className="img-card"/>
                                <Card.Body>
                                <Card.Title>jQuery</Card.Title>
                                <Card.Text>
                                    Postagem explicando porque jQuery não faz sentido para todo projeto.
                                </Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                            <Card>
                                <a target="_blank" href="https://www.tecmundo.com.br/mercado/142572-participe-maratona-behind-the-code-desafios-programacao.htm"> 
                                <Card.Img variant="top" src={blog2} className="img-card" />
                                <Card.Body>
                                <Card.Title>Maratona Behind the Code</Card.Title>
                                <Card.Text>
                                    Participe da Maratona Behind the Code com desafios de programação.
                                </Card.Text>
                                </Card.Body>
                                </a>    
                            </Card>
                            <Card>
                                <a target="_blank" href="https://www.tecmundo.com.br/mercado/142572-participe-maratona-behind-the-code-desafios-programacao.htm"> 
                                <Card.Img variant="top" src={blog3} className="img-card"/>
                                <Card.Body>
                                <Card.Title>Crie seu próprio jogo 3D</Card.Title>
                                <Card.Text>
                                    Crie seu próprio jogo 3D com essa ferramenta gratuita do Google.
                                </Card.Text>
                                </Card.Body>
                                </a>
                            </Card>
                        </CardDeck>
                    </div>
                 </div>
            </section>
        );
    }
}

export default Blog;