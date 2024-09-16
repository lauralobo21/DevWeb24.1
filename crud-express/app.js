var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// importando os arquivos de rotas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var professoresRouter = require("./routes/professores")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// disponibilizando as rotas para o cliente
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/professores', professoresRouter)

// REACT <=> app.js -> professores.js -> ProfessorService.js -> ProfessorModel.js e data.js

module.exports = app;
