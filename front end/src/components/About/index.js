import React, { Component } from 'react';
import api from "../../services/api";
import { Image } from 'react-bootstrap';
import "./styles.css";
import int from '../../images/int.png';
import atv from '../../images/atv.png';
import formacao from '../../images/formacao.png';
import idioma from '../../images/idioma.png';


class About extends Component {
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
            <section id="sobre">

                <div className="div-sobre"> 
                    <Image src={int} className="icon-img" />
                    <h1 className="title-sobre">Interesses</h1>
                </div>
                <ul>
                {this.state.portfolio.map(portfolio => portfolio.interesses.map((item, key) => <li key={key}>{item}</li>))}
                </ul>
                

                <div className="div-sobre">
                    <Image src={idioma} className="icon-img" />
                    <h1 className="title-sobre">Idiomas</h1>
                </div>
                <ul>
                    {this.state.portfolio.map(portfolio => portfolio.idiomas.map((item, key) => <li key={key}>{item}</li>))}
                </ul>
                
                <div className="div-sobre">
                    <Image src={formacao} className="icon-img" />
                    <h1 className="title-sobre">Formação</h1>                         
                </div>
                <ul>
                  {this.state.portfolio.map(portfolio => portfolio.formacao.map((item, key) => <li key={key}>{item}</li>))}
                </ul>
                
                <div className="div-sobre">
                    <Image src={atv} className="icon-img" />
                    <h1 className="title-sobre">Atividades Desenvolvidas</h1>
                </div>
                <ul>
                    {this.state.portfolio.map(portfolio => portfolio.atividades.map((item, key) => <li key={key}>{item}</li>))}
                </ul>
                
            </section>
            
        );
    }
}

export default About;