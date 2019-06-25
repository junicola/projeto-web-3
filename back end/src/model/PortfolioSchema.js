const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PortfolioSchema = new mongoose.Schema({
    minibio:{
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    curriculo:{
        type: String,
        required: true
    },
    interesses:{
        type: [String],
        required: true
    },
    idiomas:{
        type: [String],
        required: true
    },
    formacao:{
        type: [String],
        required: true
    },
    atividades:{
        type: [String],
        required: true
    },
    habilidades:{
        type: [String],
        required: true
    },
    info:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    links:{
        type: [String],
        required: true
    },
    nomeProj:{
        type: String,
        required: true
    },
    dataProj:{
        type: Date,
        required: true
    },
    descricaoProj:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);