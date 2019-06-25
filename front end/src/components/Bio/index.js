import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import "./styles.css";
import me from '../../images/eu.jpg';

class Bio extends Component {
    render(){
        return (            
            <section id="bio">
                <h1 id="title-bio">Biografia</h1>
                <div id="div-bio">
                    <Image src={me} roundedCircle id="img-eu"/>
                    <p >
                    Me chamo Júlia Nicola Gualeve, tenho 21 anos, nasci dia 31 de Outubro (Halloween ♥) na cidade de Marília, localizada no interior do estado de São Paulo. 
                    Com poucos anos de idade ainda, fui morar em Brasília, onde fiquei até meus 6 anos. Mudei para São Paulo e em 2008 voltei para Marília.
                    Enquanto estudava, também fazia um curso de inglês, que foi finalizado em 2013. Com isso, fui para os Estados Unidos fazer
                    um intercâmbio de 1 mês, visitando Nova Iorque e Los Angeles. Lá, estudei no Citrus College, onde aprimorei meus conhecimentos em inglês. Ao voltar para Marília, dei 6 meses
                    de aula de monitoria no colégio Fisk.
                    No terceiro ano do ensino médio ainda não sabia qual curso eu gostaria de cursar. Finalizei os estudos em 2015 e só no meio
                    de 2016 decidi entrar em Engenharia de Software, na UTFPR de Cornélio Procópio.                    
                    </p>
                </div>
                
            </section>
            
        );
    }
}

export default Bio;