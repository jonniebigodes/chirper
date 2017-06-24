var express = require('express'),
  config = require('./configuration/configuration.js'),
  app = express(),
  port = config.SERVER_PORT;

var MongoClient = require('mongodb').MongoClient;

// check the server connection
MongoClient.connect(config.MONGO_URL, function (err, db) {
  if (db === null) {
    console.log(config.MONGO_URL + " not available!");
  } else {
    if (err === null) {
      console.log("Connected successfully to server");
    } else {
      console.log("Error connecting to server");
    }
    db.close();
  }
});


app.listen(port);

console.log('chirper back-end server running on port: ' + port);