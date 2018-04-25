const express = require('express');
//const bodyparser = require('body-parser');
const morgan = require('morgan');
const server = express();

server.use(express.json());
server.use(morgan('dev'));

module.exports = server;