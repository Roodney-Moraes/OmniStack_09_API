// IMPORTANDO A MODEL
const Booking = require("../models/Booking");

// EXPORTANDO OS DADOS
module.exports = {
    // CRIANDO UM REGISTRO
    async store(req, res) {
        // RECUPERANDO O VALOR DA REQUISIÇÃO
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        // CRIANDO UM FILTRO
        const booking = await Booking.create({
             user: user_id,
             spot: spot_id,
             date,
        });

        // POPULANDO OS DADOS
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);   
    }
};