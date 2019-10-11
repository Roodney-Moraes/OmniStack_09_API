// IMPORTANDO A MODEL
const Spot = require("../models/Spot")
const User = require("../models/User")

// EXPORTANDO OS DADOS
module.exports = {
    // LISTANDO OS DADOS
    async index(req, res){
        // RECUPERANDO O VALOR DA REQUISIÇÃO
        const { tech } = req.query;

        // CRIANDO UM FILTRO
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    // CRIANDO UMA SESSAO E INFORMANDO QUE ELA É ASSINCRONA
    async store(req, res){
        // PEGANDO O VALOR DA REQUISIÇÃO
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; 

        // PROCURANDO SE EXISTE O USUARIO
        const user = await User.findById(user_id);

        // VERIFICANDO SE O USUARIO EXISTE
        if (!user) {
            return res.status(400).json({ error: "Usuário não existente!" });
        }

        // INSERINDO NO BANCO DE DADOS
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
        })
        
        return  res.json(spot);
    }
};