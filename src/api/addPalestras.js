const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Para processar JSON

app.post('/api/palestras', (req, res) => {
  const novaPalestra = req.body;
  // Lógica para salvar a palestra no banco de dados
  console.log("Palestra recebida:", novaPalestra);

  // Simular salvamento bem-sucedido
  res.status(201).send({ message: "Palestra adicionada com sucesso!" });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});