import express from 'express';

const server = express();

server.get('/teste', (req, res) => res.json({ message: 'OK' }));

server.listen(3333);
