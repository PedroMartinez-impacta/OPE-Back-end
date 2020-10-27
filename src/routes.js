const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/AlunoController');
const ExercicioController = require('./controllers/ExercicioController');
const TreinoController = require('./controllers/TreinoController');

routes.get('/alunos/:id', AlunoController.showone);
routes.get('/alunos', AlunoController.index);
routes.post('/alunos/add', AlunoController.store);
routes.put('/alunos/update/:id', AlunoController.update);
routes.delete('/alunos/delete/:id', AlunoController.delete);

routes.get('/treinos/:id', TreinoController.showone);
routes.get('/treinos', TreinoController.index);
routes.post('/treinos/add', TreinoController.store);
//routes.put('/treinos/update/:id', TreinoController.update);
//routes.delete('/treinos/deletetrein/:id', TreinoController.deleteTrein);
routes.put('/treinos/update/:id', TreinoController.updateTrein);
routes.delete('/treinos/delete/:id', TreinoController.delete);

routes.get('/exercicios/:id', ExercicioController.showone);
routes.get('/exercicios', ExercicioController.index);
routes.post('/exercicios/add', ExercicioController.store);
routes.put('/exercicios/update/:id', ExercicioController.update);
routes.delete('/exercicios/delete/:id', ExercicioController.delete);

module.exports = routes;