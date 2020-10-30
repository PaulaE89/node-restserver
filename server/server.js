require('./config/config')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//configuracion global de rutas
app.use(require('./routes/index'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.URLDB, {useNewUrlParser:true, useCreateIndex:true},(err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE')

});

app.listen(process.env.PORT, () => {
    console.log("server is  working", process.env.PORT)
});