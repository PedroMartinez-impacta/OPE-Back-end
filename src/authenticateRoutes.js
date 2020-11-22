const express = require('express');
const routes = express.Router();

const AuthController = require('./controllers/AuthController');

routes.post('/register', AuthController.register);
routes.post('/authenticate', AuthController.authenticate);
routes.post('/rescue_password',AuthController.rescue_password);

module.exports = routes;