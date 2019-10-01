import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

// Publicas
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Adicionar validação do token
routes.use(authMiddleware);

// Usuário
routes.put('/users', UserController.update);

// Arquivo
routes.post('/files', upload.single('file'), FileController.store);


export default routes;
