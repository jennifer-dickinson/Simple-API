const apiRoutes = require('./api_routes');
const apiUsers = require('./users')

var express = require('express');
var router = express.Router();

module.exports = function(app, db) {
    apiRoutes(app,db);
    apiUsers(app,db);
}; 

