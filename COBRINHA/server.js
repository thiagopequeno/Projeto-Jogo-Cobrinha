const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://10.18.6.64:3000/cadastro');
});