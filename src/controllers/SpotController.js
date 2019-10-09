// IMPORTANDO A MODEL
// const User = require("../models/User")

// METODOS UTILIZAVEIS - INDEX, SHOW, STORE, UPDATE, DESTROY 
// EXPORTANDO OS DADOS
module.exports = {
    // CRIANDO UMA SESSAO E INFORMANDO QUE ELA É ACINCRONA
    async store(req, res){
        // PEGANDO O VALOR DA REQUISIÇÃO
        console.log(req.body);
        console.log(req.file);
        
        return  res.json( {ok : true});
    }
};