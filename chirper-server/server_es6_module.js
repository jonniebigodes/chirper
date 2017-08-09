import * as dbService  from './services/databaseService_es6_module';
import {configData} from './configuration/configuration.js';
/**
 * express and es6 way of initializing it
 */
import express from 'express';

const app= express();

/**
 * sets the port as a "environment variable" to be used by express
 */
app.set('port',(process.env.PORT)||configData.SERVER_PORT);

dbService.setUrl(configData.MONGO_URL+configData.CHIRPER_DB);
//

/**
 * connection testing with promises
 */
 /* dbService.testConnection()
      .then((result)=>{
        console.log(`connection testing result:${result}`);
      })
       .catch((error)=>{
        console.log(`something went wrong testing the connection:\n${error}`);
}) */



/**
 * fat arrow function to inject dummy data to persist the collection and db
 */
 const chirperInject=()=>{
    dbService.injectData({collectionName:"users",Data:{
      username:'dummy',
      password:'dummy',
      registered:'2017-02-02',
      lastLogin:'2017-02-02',
      email:'dummy@noneyabusiness.com'
    }})
    .then((result)=>{

    })
    .catch((error)=>{
      console.log(`Something went wrong with injection: ${error}`);
    });
} 
/**
 * fat arrow function to generate collections
 */
 const chirpercreateCollections=()=>{
    dbService.createCollections(configData.COLLECTIONS_LIST)
      .then((result)=>{
        console.log(`connection result: ${result}`);
        chirperInject();
      })
      .catch((error)=>{
        console.log(`cannot connect to database cause:\n${error}`);
      });
} 







/**
 * single connection with promises...callbacks are the devil's tools
 */

 dbService.connect()
      .then((result)=>{
        console.log(`connection result: ${result}`);
        console.log(`Creating collections.....`);
        chirpercreateCollections();
      })
      .catch((error)=>{
        console.log(`cannot connect to database cause:\n${error}`);
}) 






/**
 * sets the app to listen to the port defined
 */
app.listen(app.get('port'),(error)=>{
  if (error) {
        console.log("error chirper server: " + error);
    } else {
        console.info("chirper server is running on port", app.get('port'));
    }
});