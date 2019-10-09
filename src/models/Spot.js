// IMPORTANDO UMA DEPENDENCIA 
const mongoose = require("mongoose");

// CRIANDO UMA SCHEMA DO BANCO
const SpotSchema = new mongoose.Schema({
    // CONFIGURANDO CAMPOS DO BANCO
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'   
    }
}); 

// EXPORTANDO UM MODULO 
module.exports = mongoose.model('Spot', SpotSchema);