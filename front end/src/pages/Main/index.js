import React, { Fragment } from "react";  
import Menu from "../../components/Menu";
import Home from "../../components/Home";
import About from "../../components/About";
import Habilidades from "../../components/Habilidades";
import Blog from "../../components/Blog";
import Portfolio from "../../components/Portfolio";
import Bio from "../../components/Bio";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
const Main = () => {
  return (
    <Fragment>
      <Menu />
      <Home />
      <About />
      <Habilidades />
      <Blog />
      <Portfolio />
      <Bio />
      <Contato />
      <Footer />
    </Fragment>
  );
};
export default Main;