import React, { Component } from 'react';
import api from "../../services/api";
import { Image } from 'react-bootstrap';
import "./styles.css";
import port from '../../images/port.png';

class Portfolio extends Component{
    state = {
        portfolio : []
    };
    getPortfolioFromApi = () => {
        api.get("http://localhost:9999/api/portfolio", {
                crossDomain : true
            }).then(result => {
                this.setState({ portfolio: result.data})
                console.log("Teste::: "+result);

            });
    };
    componentDidMount() {
        this.getPortfolioFromApi();
    }
    
    render(){
        return (
        <section id="portfolio">
            <h1 id="title-port">Portfólio</h1>
            <div id="div-port">
                <div className="projs">
                
                {this.state.portfolio.map((item, key)=> 
                    {
                        return(
                            item.projeto.map((item)=> 
                            <a key={key} href={item.link} target="_blank" rel="noopener noreferrer">{item.nome} 
                                <Image src={port} id="img-port"/>
                                <p>Data: {item.data} <br></br> Descrição: {item.descricao} </p>
                            </a> 
                            
                            ))
                    }
                )}
                </div>
            </div>
            
        </section>
        );
    }
}

export default Portfolio;