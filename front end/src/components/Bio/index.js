import React, { Component } from 'react';
import api from "../../services/api";
import { Image } from 'react-bootstrap';
import "./styles.css";
import me from '../../images/eu.jpg';

class Bio extends Component {
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
            <section id="bio">
                <h1 id="title-bio">Biografia</h1>
                <div id="div-bio">
                    <Image src={me} roundedCircle id="img-eu"/>
                    {this.state.portfolio &&
                        this.state.portfolio.map((portfolio, key)  => {
                            return (
                                <p key={key}>{portfolio.bio}</p>
                            )
                        })}
                </div>
                
            </section>
            
        );
    }
}

export default Bio;