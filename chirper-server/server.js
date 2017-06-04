var express = require('express'),
  config = require('./configuration/config.js'),
  app = express(),
  port = process.env.PORT || config.SERVER_PORT;
app.listen(port);

console.log('chirper server running on port: ' + port);