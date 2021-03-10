import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UsuarioController from './app/controllers/UsuarioController';
import AuthController from './app/controllers/AuthController';
import CursoController from './app/controllers/CursoController';

const routes = new Router();

routes.get('/', (req, res) => res.send('Funcionando...'));
routes.post('/usuarios', UsuarioController.store);
routes.post('/auth', AuthController.store);

routes.use(authMiddleware);

routes.get('/curso', CursoController.index);
routes.get('/curso/:id', CursoController.show);
routes.post('/curso', CursoController.store);

routes.use((req, res, next) => {
	const erro = new Error("Não encontrado");
	erro.status(404);
	next(erro);
});

routes.use((error, req, res, next) => {
	res.status(error.status || 500);
	return res.send({
		erro: {
			mensagem: error.message
			}
	});
	
	next();
});

export default routes;
