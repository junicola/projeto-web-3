import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./styles.css";
import api from "../../services/api";

class Habilidades extends Component{
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
            <section id="habilidades">
                <h1 id="title-hab">Habilidades</h1>
                <div id="div-btn"> 
                    {this.state.portfolio.map(portfolio => 
                        portfolio.habilidades.map((item, key) => 
                        <Button variant="outline-light" className="btn" key={key}>{item}</Button>))
                    }
                </div>
                 
            </section>
        );
    }
}

export default Habilidades;