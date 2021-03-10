const { Router } = require('express');
const knex = require('./database');
const NaverController = require('./controllers/naversController');

const routes = Router();

routes.get('/navers', NaverController.index);
routes.post('/navers', NaverController.store);

module.exports = routes;
