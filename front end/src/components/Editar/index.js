import React, { Component } from 'react';
import { Form, Image } from 'react-bootstrap';
import "./styles.css";
import api from '../../services/api';
import del from '../../images/del.png'; 
import save from '../../images/check.png';


class Editar extends Component {
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

    handleChange = () => {
        const copia = this.state.portfolio;
        copia[0].minibio = this.inputMini.value;
        copia[0].bio = this.inputBio.value;
        copia[0].linkFace = this.inputFace.value;
        copia[0].linkInsta = this.inputInsta.value;
        copia[0].linkGit = this.inputGit.value;
        copia[0].interesses = this.handleArray(this.inputInteresses.value);       
        copia[0].idiomas = this.handleArray(this.inputIdiomas.value);             
        copia[0].formacao = this.handleArray(this.inputFormacao.value);             
        copia[0].atividades = this.handleArray(this.inputAtividades.value);             
        copia[0].habilidades = this.handleArray(this.inputHabilidades.value);             

                    
        this.setState({portfolio : copia });
        this.update(this.state.portfolio);
        alert("Campo(s) editado(s)");
        
    }

    handleArray = (valores) => {
        const newA = valores.split(',');
        return(
            newA
        )
    }

    update = (portfolio) => {
        api.post("http://localhost:9999/api/portfolio/"+portfolio[0]._id, 
            this.state.portfolio[0]
        )
        .then(result => {
            this.getPortfolioFromApi();
            console.log("Teste UPDATE "+portfolio[0].minibio);
        })
    }

    deleteAll = portfolio => {
        api.delete(`http://localhost:9999/api/portfolio/${portfolio[0]._id}`)
        .then(result => {
            this.getPortfolioFromApi();
          });
    }

    render(){
        return (            
            <section id="editar">
                <h1 id="title-edit">Edição</h1>
                    <Form> 
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label class="title-label">Mini Biografia</Form.Label>
                        <Image src={del} id="img-edit" onClick={ () => {
                                const copia = this.state.portfolio;
                                copia[0].minibio = " ";
                        
                                this.setState({portfolio : copia });
                                this.update(this.state.portfolio);
                                alert("Campo apagado");
                                
                            }
                        }/>
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => {
                                return (
                                    <Form.Control as="textarea" rows="3" key={key}
                                     defaultValue={portfolio.minibio}
                                     ref={mini => this.inputMini = mini}>
                                    </Form.Control>
                                )
                            })}

                        
                                               
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label class="title-label">Biografia Completa</Form.Label>
                        <Image src={del} id="img-edit" onClick={ () => {
                                const copia = this.state.portfolio;
                                copia[0].bio = "";
                        
                                this.setState({portfolio : copia });
                                this.update(this.state.portfolio);
                                alert("Campo apagado");
 
                            }
                        }/>
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => {
                                return (
                                    <Form.Control as="textarea" rows="3" key={key}
                                     defaultValue={portfolio.bio}
                                     ref={bio => this.inputBio = bio}>
                                    </Form.Control>
                                )
                            })}
                                             
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label class="title-label">Link Face</Form.Label>
                        <Image src={del} id="img-edit" onClick={ () => {
                                const copia = this.state.portfolio;
                                copia[0].linkFace = "";
                        
                                this.setState({portfolio : copia });
                                this.update(this.state.portfolio);
                                alert("Campo apagado");
 
                            }
                        }/>
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => {
                                return (
                                    <Form.Control as="textarea" rows="1" key={key}
                                     defaultValue={portfolio.linkFace}
                                     ref={face => this.inputFace = face}>
                                    </Form.Control>
                                )
                            })}
                                             
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label class="title-label">Link Insta</Form.Label>
                        <Image src={del} id="img-edit" onClick={ () => {
                                const copia = this.state.portfolio;
                                copia[0].linkInsta = "";
                        
                                this.setState({portfolio : copia });
                                this.update(this.state.portfolio);
                                alert("Campo apagado");
 
                            }
                        }/>
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => {
                                return (
                                    <Form.Control as="textarea" rows="1" key={key}
                                     defaultValue={portfolio.linkInsta}
                                     ref={insta => this.inputInsta = insta}>
                                    </Form.Control>
                                )
                            })}
                                             
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label class="title-label">Link GitHub</Form.Label>
                        <Image src={del} id="img-edit" onClick={ () => {
                                const copia = this.state.portfolio;
                                copia[0].linkGit = "";
                        
                                this.setState({portfolio : copia });
                                this.update(this.state.portfolio);
                                alert("Campo apagado");
 
                            }
                        }/>
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => {
                                return (
                                    <Form.Control as="textarea" rows="1" key={key}
                                     defaultValue={portfolio.linkGit}
                                     ref={git => this.inputGit = git}>
                                    </Form.Control>
                                )
                            })}
                                             
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => 
                                {
                                    return(
                                        <div>
                                            <Form.Label class="title-label">Interesses</Form.Label>
                                            <Image src={del} id="img-edit" onClick={ () => {
                                                const copia = this.state.portfolio;
                                                copia[0].interesses = "";
                                        
                                                this.setState({portfolio : copia });
                                                this.update(this.state.portfolio);
                                                alert("Campo apagado");
                 
                                            }
                                            }/>
                                            <Form.Control as="textarea" rows="1" key={key}
                                            defaultValue={portfolio.interesses}
                                            ref={int => this.inputInteresses = int}>
                                            </Form.Control>
                                            
                                         
                                        </div>                                    
                                    )
                                })}
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => 
                                {
                                    return(
                                        <div>
                                            <Form.Label class="title-label">Idiomas</Form.Label>
                                            <Image src={del} id="img-edit" onClick={ () => {
                                                const copia = this.state.portfolio;
                                                copia[0].idiomas = "";
                                        
                                                this.setState({portfolio : copia });
                                                this.update(this.state.portfolio);
                                                alert("Campo apagado");
                 
                                            }
                                            }/>
                                            <Form.Control as="textarea" rows="1" key={key}
                                            defaultValue={portfolio.idiomas}
                                            ref={idioma => this.inputIdiomas = idioma}>
                                            </Form.Control>
                                            
                                         
                                        </div>                                    
                                    )
                                })}
                    </Form.Group>    

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => 
                                {
                                    return(
                                        <div>
                                            <Form.Label class="title-label">Formacao</Form.Label>
                                            <Image src={del} id="img-edit" onClick={ () => {
                                                const copia = this.state.portfolio;
                                                copia[0].formacao = "";
                                        
                                                this.setState({portfolio : copia });
                                                this.update(this.state.portfolio);
                                                alert("Campo apagado");
                 
                                            }
                                            }/>
                                            <Form.Control as="textarea" rows="1" key={key}
                                            defaultValue={portfolio.formacao}
                                            ref={formacao => this.inputFormacao = formacao}>
                                            </Form.Control>
                                         
                                        </div>                                    
                                    )
                                })}
                    </Form.Group> 

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => 
                                {
                                    return(
                                        <div>
                                            <Form.Label class="title-label">Atividades</Form.Label>
                                            <Image src={del} id="img-edit" onClick={ () => {
                                                const copia = this.state.portfolio;
                                                copia[0].atividades = "";
                                        
                                                this.setState({portfolio : copia });
                                                this.update(this.state.portfolio);
                                                alert("Campo apagado");
                 
                                            }
                                            }/>
                                            <Form.Control as="textarea" rows="1" key={key}
                                            defaultValue={portfolio.atividades}
                                            ref={atv => this.inputAtividades = atv}>
                                            </Form.Control>
                                         
                                        </div>                                    
                                    )
                                })}
                    </Form.Group>              

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {this.state.portfolio &&
                            this.state.portfolio.map((portfolio,key ) => 
                                {
                                    return(
                                        <div>
                                            <Form.Label class="title-label">Habilidades</Form.Label>
                                            <Image src={del} id="img-edit" onClick={ () => {
                                                const copia = this.state.portfolio;
                                                copia[0].habilidades = "";
                                        
                                                this.setState({portfolio : copia });
                                                this.update(this.state.portfolio);
                                                alert("Campo apagado");
                 
                                            }
                                            }/>
                                            <Form.Control as="textarea" rows="1" key={key}
                                            defaultValue={portfolio.habilidades}
                                            ref={hab => this.inputHabilidades = hab}>
                                            </Form.Control>
                                         
                                        </div>                                    
                                    )
                                })}
                    </Form.Group>   


                    </Form>
                    <div id="final">

                        <button onClick={() => {
                        this.deleteAll(this.state.portfolio);
                        }} >
                            <Image src={del} id="img-edit-principal" />
                            <p>Apagar tudo</p>
                        </button>
                        
                        <button onClick={() => {
                            this.handleChange();
                        }} >
                            <Image src={save} id="img-edit-principal" /> 
                            <p>Salvar</p>
                        </button> 
                    </div>   
            </section>
            
        );
    }
}

export default Editar;