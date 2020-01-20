import express from 'express';

const server = express();

server.get('/teste', (req, res)=>{

  return res.json({ message: 'OK' });
  
});

server.listen(3333);