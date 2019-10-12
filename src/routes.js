    // IMPORTANDO UMA DEPENDENCIA EXTERNA
const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

// IMPORTANDO OS CONTROLLERS
const SessionController = require("./controllers/SessionController")
const SpotController = require("./controllers/SpotController")
const DashboardController = require("./controllers/DashboardController")
const BookingController = require("./controllers/BookingController")

// CHAMANDO A FUNÇÃO ROUTES DA DEPENDENCIA EXPRESS
const routes = express.Router();

// CHAMANDO A FUNÇÃO PARA TRATAR AS IMAGENS
const upload = multer(uploadConfig);

// CONFIGURANDO AS ROTAS - METODOS - GET, POST, PUT, DELETE
// REQ.QUERY = ACESSAR A QUERY PARAMS (PARA FILTROS)
// REQ.PARAMS = ACESSAR O ROUTES PARAMS (PARA EDIÇÃO E EXCLUSÃO)
// REQ.BODY = ACESSAR CORPO DA REQUISIÇÃO (PARA CRIAÇÃO E EDIÇÃO)

// ROTAS DA APLICAÇÃO
routes.get('/', (req, res) =>{
    return res.json( {
        message : "API em Node.JS",
        nome : req.query.nome,
        idade : req.query.idade
    });
});
routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/booking', BookingController.store);


// EXPORTANDO AS ROTAS
module.exports = routes;
