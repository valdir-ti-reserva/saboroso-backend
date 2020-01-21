import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ContactController from './app/controllers/ContactController';
import EmailController from './app/controllers/EmailController';
import ReservationController from './app/controllers/ReservationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/contacts', ContactController.store);
routes.post('/subscribe', EmailController.store);
routes.post('/reservations', ReservationController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
