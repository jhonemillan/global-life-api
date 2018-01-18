const express = require('express');
const bodyparser = require('body-parser');
const expressValidator = require('express-validator');
const Sequelize = require('sequelize');
const morgan = require('morgan');
var medicamento = require('./routes/medicamentos');
var seguimiento = require('./routes/seguimiento_medicamento');
var braden = require('./routes/braden');
var cors = require('cors');
const app = express();
//var env = app.get('env') == 'development' ? 'dev':  app.get('env');
var port = process.env.port || 3000;

app.use(cors());
app.use(bodyparser.json());
app.use(expressValidator());
app.use(morgan("dev"));
app.use('/medicamento',medicamento);
app.use('/seguimiento', seguimiento);
app.use('/valoracion', braden);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, ()=>{
    console.log('Se conecta al puerto ' + port)
});

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = {app};
