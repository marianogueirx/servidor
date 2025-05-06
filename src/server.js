
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'pages/index.html')));
app.get('/sobre', (req, res) => res.sendFile(path.join(__dirname, 'pages/sobre.html')));
app.get('/comprar', (req, res) => res.sendFile(path.join(__dirname, 'pages/comprar.html')));
app.get('/sinopse', (req, res) => res.sendFile(path.join(__dirname, 'pages/sinopse.html')));
app.get('/atores', (req, res) => res.sendFile(path.join(__dirname, 'pages/atores.html')));

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
