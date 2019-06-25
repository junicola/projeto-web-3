const express = require("express");
const routes = express.Router();

const PortfolioController = require("./controller/PortfolioController");

routes.get("/portfolio", PortfolioController.index);
routes.post("/portfolio", PortfolioController.store);
routes.get("/portfolio/:id", PortfolioController.show);
routes.put("/portfolio/:id", PortfolioController.update);
routes.delete("/portfolio/:id", PortfolioController.destroy);

module.exports = routes;
