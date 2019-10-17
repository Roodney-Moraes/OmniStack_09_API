// IMPORTANDO UMA DEPENDENCIA 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

// CRIANDO UMA APLICAÇÃO
const app = express();

// CONEXAO COM O MONGO DB
mongoose.connect("mongodb+srv://omnistack:omnistack@omnistack-zbwbf.mongodb.net/semana09?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// USAR PLUGIN PARA USAR FORMATO JSON DO EXPRESS
app.use(cors());
// USAR PLUGIN PARA USAR FORMATO JSON DO EXPRESS
app.use(express.json());
// CHAMANDO AS ROTAS
app.use(routes); 


// CONFIGURANDO A PORTA PARA EXECUÇÃO
app.listen(3333);
