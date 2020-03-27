const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringasArray')


module.exports = {
    //função ja recebe 2 parametros automatioos (request, response)
        //get => RECEBER INFORMAÇÃO
        async index(request,response){
            const devs = await Dev.find(); 
            return response.json(devs);

        },

    async store(request,response)  {
         //Corpo da requisição
        const{github_userName, techs, Latitude, Longitude} = request.body;
    
        //nao cadastrar devs repetidos
        //Procura um elemento com o username que foi mandado no corpo da requisição
        let dev = await Dev.findOne({github_userName});
           
        if(!dev){

        // API GIT HUB
        const apiresponse = await axios.get(`https://api.github.com/users/${github_userName}`);
         const {name = login, avatar_url ,bio}= apiresponse.data;

    //divide a string em um vetor de techs, e percorre com o map, e retira os espaços com trim();
        const techsArray =  parseStringAsArray(techs);
        
    
    
        const Location = {
            type:'Point',
            coordinates: [Longitude, Latitude]
    
    
        }
    
        //cria o elemento no banco de dados
         dev  = await Dev.create({
            github_userName,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            Location,
        });
    

            }
    
    
    
        return response.json(dev);
    
        //JSON ENVIA REPOSTA ATRAVES DE OBJETOS E VETORES
        
        }


};