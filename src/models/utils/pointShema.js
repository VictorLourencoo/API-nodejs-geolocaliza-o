
// point schema e o tipo da localização, latitude e longitude

const mongoose = require('mongoose');

const PointShema =  new mongoose.Schema({
type:{
    type: String,
    enum: ['Point'],
    required: true,
    // um coluna do tipo string que tem e enum ponint e required porque e obrigatiria
    // essa parte ta na documentação do mongo

},
coordinates: {
    type: [Number],
    required: true,
},

});

module.exports = PointShema;