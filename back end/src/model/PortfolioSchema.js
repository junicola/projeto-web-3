const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PortfolioSchema = new mongoose.Schema({
    minibio:{
        type: String
    },
    foto:{
        type: String
    },
    curriculo:{
        type: String        
    },
    interesses:{
        type: [String]         
    },
    idiomas:{
        type: [String]         
    },
    formacao:{
        type: [String]         
    },
    atividades:{
        type: [String]         
    },
    habilidades:{
        type: [String]         
    },
    info:{
        type: String         
    },
    bio:{
        type: String         
    },
    linkInsta:{
        type: String         
    },
    linkFace:{
        type: String         
    },
    linkGit:{
        type: String         
    },    
    projeto:{
        type: [Map]
    }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);

/*nome: {
    type: String,
    required: true 
},
data:{
    type: Date,
    required: true
},
descricao: {
    type: String,
    required: true
},
link:{
    type: String,
    required: true
}*/