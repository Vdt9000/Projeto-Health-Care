const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello-world', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Serviço em execução na porta ${3000}`);
});
