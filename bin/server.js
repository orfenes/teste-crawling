const app  = require('../src/app');
const http = require('http');

const port = '9000';

const server = http.createServer(app);

server.listen(port);

console.log(`servidor rodando na porta ${port}`);


