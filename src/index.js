const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes');
//importando a biblioteca express pra aplicação
const app = express();

mongoose.connect('mongodb+srv://victor:ve9967bl@cluster0-votym.mongodb.net/projetoRocket?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true,});



app.use(express.json());
app.use(routes);

app.listen(8080);
//config porta