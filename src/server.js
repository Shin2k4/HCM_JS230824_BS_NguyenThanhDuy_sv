import express from 'express';

const server = express();

import todoapi from './routes/index.js';
import bodyParser from 'body-parser';
server.use(bodyParser.json())

server.use('/api', todoapi);

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})