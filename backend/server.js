const express = require('express');
const app = express();
const cors = require('cors');
const receitas = require('./receitas.json');

app.use(cors());

app.use((req, res, next) => {
  console.log(
    `[${Intl.DateTimeFormat('pt-BR', {
      timeStyle: 'medium',
      dateStyle: 'short',
    }).format(new Date())}] ${req.method} ${req.originalUrl}`
  );
  next();
});

app.get('/receitas', (req, res) => {
  const resposta = receitas.map((receita) => ({
    id: receita.id,
    nome: receita.nome,
    pais: receita.pais,
  }));

  res.send(resposta);
});

app.get('/receitas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(receitas[id]);
});

app.listen(3001, () => console.log('Servidor escutando na porta 3001\n'));
