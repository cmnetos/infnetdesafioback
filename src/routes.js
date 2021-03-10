const { Router } = require('express');

const authMiddleware = require('./app/middlewares/auth');

const UsuarioController = require('./app/controllers/UsuarioController');
const AuthController = require('./app/controllers/AuthController');
const CursoController = require('./app/controllers/CursoController');

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

module.exports = routes;
