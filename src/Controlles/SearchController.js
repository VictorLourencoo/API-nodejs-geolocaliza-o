const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringasArray')


module.exports ={ 

async index (Request,Response){
//busca de devs por um raio de 10km 
//filtrar pela trechs
const {Latitude, Longitude, techs} = Request.query;

const techsArray = parseStringAsArray(techs);

const devs = await Dev.find({
    techs: {
        //dentro de teechs se passa um objeto, pois podem ter filtros em tecnologia.
        $in: techsArray,
        // techs que estão dentro $in = "dento de " operador logico do mongo
    },
    Location: {
        $near:{
            $geometry:{
                type:'Point',
                coordinates: [Longitude, Latitude],

            },
            $maxDistance:10000,
        },
    },

});


return Response.json({devs})


}

    
}