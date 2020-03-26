const  express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create); //Definindo a rota, após a barra é o recurso.

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
    //const params = request.query; //Acessar os parametros dentro de query.
    //const params = request.params; //Acessar os parametros de route

routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;