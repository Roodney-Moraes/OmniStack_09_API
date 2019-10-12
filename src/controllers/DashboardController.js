// IMPORTANDO A MODEL
const Spot = require("../models/Spot");

// EXPORTANDO OS DADOS
module.exports = {
    // LISTANDO OS DADOS
    async show(req, res) {
        // RECUPERANDO O VALOR DA REQUISIÇÃO
        const { user_id } = req.headers;

        // CRIANDO UM FILTRO
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
};