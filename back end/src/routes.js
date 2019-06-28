const express = require("express");
const routes = express.Router();

const PortfolioController = require("./controller/PortfolioController");

routes.get("/portfolio", PortfolioController.index);
routes.post("/portfolio", PortfolioController.store);
routes.get("/portfolio/:id", PortfolioController.show);
routes.post("/portfolio/:id", PortfolioController.update);
routes.delete("/portfolio/:id", PortfolioController.destroy);
routes.get("/portfolio/:id/idiomas", PortfolioController.showIdiomas);
routes.get("/portfolio/:id/projetos", PortfolioController.showProjetos);
routes.get("/portfolio/:id/habilidades", PortfolioController.showHabilidades);
routes.get("/portfolio/:id/atividades", PortfolioController.showAtividades);
routes.get("/portfolio/:id/formacao", PortfolioController.showFormacao);
routes.get("/portfolio/:id/bio", PortfolioController.showBio);
routes.get("/portfolio/:id/git", PortfolioController.showGit);
routes.get("/portfolio/:id/insta", PortfolioController.showInsta);
routes.get("/portfolio/:id/face", PortfolioController.showFace);

module.exports = routes;
