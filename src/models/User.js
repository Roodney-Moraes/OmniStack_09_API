// IMPORTANDO UMA DEPENDENCIA 
const mongoose = require("mongoose");

// CRIANDO UMA SCHEMA DO BANCO
const UserSchema = new mongoose.Schema({
    email: String
}); 

// EXPORTANDO UM MODULO 
module.exports = mongoose.model('User', UserSchema);