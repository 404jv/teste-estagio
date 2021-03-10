const { Router } = require('express');
const NaverController = require('./controllers/naversController');

const routes = Router();

routes.get('/navers', NaverController.index);
routes.get('/navers/show', NaverController.show); 
routes.post('/navers', NaverController.store);

module.exports = routes;
