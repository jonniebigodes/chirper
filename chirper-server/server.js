 var express = require('express'),
   config = require('./configuration/configuration.js'),
   app = express(),
   port = config.SERVER_PORT;

 var DatabaseService = require('./services/DatabaseService.js');
 var databaseUrl = config.MONGO_URL + config.CHIRPER_DB;

 DatabaseService.testConnection(databaseUrl);


 /*
 DatabaseService.connectToDatabase(databaseUrl, function (err) {
   if (err) {
     throw err;
   }
 });

 DatabaseService.createCollections(databaseUrl, config.COLLECTIONS_LIST, undefined);
 */
 /*var MongoClient = require('mongodb').MongoClient;
 MongoClient.connect(config.MONGO_URL+config.CHIRPER_DB, function(err, db) {
   if(!err) {
     console.log("We are connected");
   }
   db.createCollection('test', function(err, collection){
     console.log('created test collection');
   });
 });
 */

 app.listen(port);

 console.log('chirper back-end server running on port: ' + port);