var express = require('express'),
  config = require('./configuration/configuration.js'),
  app = express(),
  port = config.SERVER_PORT;

var DatabaseService = require('./services/DatabaseService.js');

DatabaseService.testConnection(config.MONGO_URL);

app.listen(port);

console.log('chirper back-end server running on port: ' + port);