var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000;

app.listen(port);

console.log('chirper server running on port: '+port);