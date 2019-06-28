const mongoose = require("mongoose");
const Portfolio = require("../model/PortfolioSchema");

class PortfolioController {
  async index(req, res) {
    const portfolio = await Portfolio.find();
    return res.json(portfolio);
  }
  async store(req, res) {
    const portfolio = await Portfolio.create(req.body);
    return res.json(portfolio);
  }
  async show(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  }
  async update(req, res) {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(portfolio);
  }
  async destroy(req, res) {
    await Portfolio.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
  async showIdiomas(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.idiomas);
  }
  async showHabilidades(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.habilidades);
  }  
  async showProjetos(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.projetos);
  }
  async showAtividades(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.atividades);
  }
  async showFormacao(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.formacao);
  }
  async showMini(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.minibio);
  }
  async showBio(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.bio);
  }
  async showGit(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.linkGit);
  }
  async showInsta(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.linkInsta);
  }
  async showFace(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio.linkFace);
  }
}

module.exports = new PortfolioController();
