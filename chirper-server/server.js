var express = require('express'),
y-  config = require('./configuration/configuration.js'),
  app = express(),
  port = config.SERVER_PORT;

app.listen(port);

console.log('chirper server running on port: ' + port);