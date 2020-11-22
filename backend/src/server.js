'use strict';

let express = require('express');
let bodyParser = require('body-parser'); // serve para analisar o corpo da requisição ou req.body
let app = express();

let port = 3000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

let informacoes = {
    nome: 'Joaninha Food',
    imagem: 'https://i.ibb.co/HtFzNHB/Logo2.png',
    cidade: 'Guarapuava'
};

app.get('/', (req, res) => {
    res.json(informacoes);
});

app.post('/alterar-info', (req, res) => {
    informacoes = req.body;
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Para derrubar o servidor: ctrl + c');
});