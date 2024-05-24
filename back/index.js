require('dotenv').config();
const mysql = require ('mysql2')
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const { OpenAI } = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);


const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise();

app.post('/pergunte-ao-chatgpt', async (req, res) => {
    const { prompt } = req.body;

    pool.getConnection()
    .then((conn) => {
        conn.query("insert into logs (texto, data_hora, url) values (?, now(),'pergunte-ao-chatgpt');", [prompt]);
        conn.release();
    }).catch((err) => {
        console.log(err);
    });

    
    const model = 'gpt-3.5-turbo';
    const role = 'user';
    const max_tokens = 100;
    const completion = await openai.chat.completions.create({
        messages: [{ role: role, content: prompt }],
        model: model,
        max_tokens: max_tokens
    });
    res.json({ completion: completion.choices[0].message.content });
});

app.get('/teste', (req, res) => {
    res.send("Tudo certo");
});



app.get('/hello-world', (req, res) => {
    res.send('Hello, world!');
  });
  
app.listen(3001, () => console.log('ChatGPT_Backend em execução na porta 3001'));

