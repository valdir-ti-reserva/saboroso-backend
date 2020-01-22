import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import MenuController from './app/controllers/MenuController';
import EmailController from './app/controllers/EmailController';
import SessionController from './app/controllers/SessionController';
import ContactController from './app/controllers/ContactController';
import ReservationController from './app/controllers/ReservationController';
import FileMenuController from './app/controllers/FileMenuController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/menus', MenuController.store);
routes.post('/subscribe', EmailController.store);
routes.post('/sessions', SessionController.store);
routes.post('/contacts', ContactController.store);
routes.post('/reservations', ReservationController.store);

routes.post('/files/:id', upload.single('file'), FileMenuController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
