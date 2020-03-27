const {Router} = require('express');
const routes = Router();
const DevController = require('./Controlles/DevController');
const SearchController = require('./Controlles/SearchController');



//listar devs 
routes.get('/devs', DevController.index);

//criar devs
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;