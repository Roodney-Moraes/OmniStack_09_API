// IMPORTANDO UMA DEPENDENCIA 
const mongoose = require("mongoose");

// CRIANDO UMA SCHEMA DO BANCO
const BookingSchema = new mongoose.Schema({
    // CONFIGURANDO CAMPOS DO BANCO
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

// EXPORTANDO UM MODULO 
module.exports = mongoose.model('Booking', BookingSchema);