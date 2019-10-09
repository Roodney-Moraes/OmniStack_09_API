// IMPORTANDO A MODEL
const User = require("../models/User")

// METODOS UTILIZAVEIS - INDEX, SHOW, STORE, UPDATE, DESTROY 
// EXPORTANDO OS DADOS
module.exports = {
    // CRIANDO UMA SESSAO E INFORMANDO QUE ELA É ACINCRONA
    async store(req, res){
        // PEGANDO O VALOR DA REQUISIÇÃO - DESESTRUTURAÇÃO
        const {email} = req.body;

        // LOCALIZANDO UM USUARIO PELO EMAIL
        let user = await User.findOne({ email });

        // VERIFICANDO SE O EMAIL JA FOI CADASTRADO
        if (!user) {
            // INSERINDO A INFORMAÇÃO NO BANCO - QUANDO FINALIZAR A INFORMAÇÃO NO BANCO
            user =  await User.create({ email });   
        }

        return  res.json(user);
    }
};