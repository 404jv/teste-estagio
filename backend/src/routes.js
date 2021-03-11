const { Router } = require('express');
const NaverController = require('./controllers/naversController');
const ProjectsController = require('./controllers/projectsController');

const routes = Router();

routes.get('/navers', NaverController.index);
routes.get('/navers/show', NaverController.show); 
routes.post('/navers', NaverController.store);

routes.get('/projects', ProjectsController.index);
routes.get('/projects/show', ProjectsController.show);

module.exports = routes;
