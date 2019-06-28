import React, { Component } from 'react';
import api from "../../services/api";
import { Image, Button } from 'react-bootstrap';
import "./styles.css";
import profile from '../../images/profile.png';


class Home extends Component {
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
    render() {
        return (
            <section id="home">
                    <div id="color"> 
                        <h1 id="title-home">Sobre mim</h1>
                        <Image src={profile} id="img-profile" />
                        <div id="mini-bio">
                            {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key) => {
                                return (
                                    <p key={key}>{portfolio.minibio}</p>
                                )
                            })}
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