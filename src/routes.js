    // IMPORTANDO UMA DEPENDENCIA EXTERNA
const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

// IMPORTANDO O CONTROLLER
const SessionController = require("./controllers/SessionController")
const SpotController = require("./controllers/SpotController")
const DashboardController = require("./controllers/DashboardController")
const BookingController = require("./controllers/BookingController")

// CHAMANDO A FUNÇÃO ROUTES
const routes = express.Router();

// CHAMANDO A FUNÇÃO PARA TRATAR AS IMAGENS
const upload = multer(uploadConfig);

// CONFIGURANDO AS ROTAS - METODOS - GET, POST, PUT, DELETE
// REQ.QUERY = ACESSAR A QUERY PARAMS (PARA FILTROS)
// REQ.PARAMS = ACESSAR O ROUTES PARAMS (PARA EDIÇÃO E EXCLUSÃO)
// REQ.BODY = ACESSAR CORPO DA REQUISIÇÃO (PARA CRIAÇÃO E EDIÇÃO)

// METODO POST BODY
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/booking', BookingController.store);


// EXPORTANDO AS ROTAS
module.exports = routes;
