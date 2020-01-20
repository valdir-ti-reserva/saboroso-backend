import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res, next) => {

  return res.json({ message: 'MVC' });

});

export default routes;