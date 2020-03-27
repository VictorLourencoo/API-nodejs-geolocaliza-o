
const mongoose = require('mongoose');
const PointSchema = require('./utils/pointShema')
const DevController = require('../Controlles/DevController')

const devSchema = new mongoose.Schema({
name: String ,
github_userName: String, 
bio: String,
avatar_url: String, 
// vetor de Strings
techs: [String],
Location:{
    type: PointSchema, 
    index: '2dsphere'
    //trabalhar com geolocalizção precisa de um indice
}



});

module.exports = mongoose.model('Dev', devSchema);
// EXPORTAR PARA O BANCOD DE DADOS, 'DEV' E O NOME DA ENTIDADE

