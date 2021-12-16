const express = require('express');
const cors = require('cors');

const mongoose = require ('mongoose');
const morgan = require('morgan');

const app = express();

// importa dbconfig
const database = require('./config/db.config');
// conexão Banco de dados
mongoose.Promise = global.Promise;
mongoose.connect(database.local.localDatabaseUrl, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(console.log('Banco de dados conectador com sucesso!'),(err)=>{
    console.log(`erro ao conectar com o banco de dados...:${err}`);
    process.exit();
});

    

 


const index = require('./routes/index');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api.json' }));
app.use(cors());
app.use(morgan('dev'));
app.use(index);
//TODO incluir a rota 'user.routes.js'

module.exports = app;
