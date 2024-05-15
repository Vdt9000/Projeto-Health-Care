const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());


app.get("/consultar", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "seu_usuario",
    password: "sua_senha",
    database: "sua_base_de_dados",
  });
  
  connection.query("select * from tb_logs", (err, results, fields) => {
    console.log(results);
    console.log(fields);
    res.json(results);
  });
});



app.get("/logs", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "seu_usuario",
    password: "sua_senha",
    database: "sua_base_de_dados",
  });
  
  connection.query("select * from tb_logs", (err, results, fields) => {
    console.log(results);
    console.log(fields);
    res.json(results);
  });
});



app.get("/hello-world", (req, res) => {
  res.send("Hello, world!");
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serviço em execução na porta ${3000}`);
});
