/**
 * module export es6 style version working with promises
 * multiple exports per file
 */

import * as dbClient from 'mongodb';
// variables to contain the information about db
let urlServer='';
let dbInstance={};
//

/**
 * fat arrow function to set the variable 
 * @param {string} item mongourl address 
 */
export const setUrl=(item)=>{
    urlServer= item;
}
/**
 * fat arrow function to get the mongodb url
 */
export const getUrl=()=>{
    return urlServer;
}
/**
 * es6 fat arrow function exported and exposed to connect to the db
 */
export const connect=()=>{
    return new Promise((resolve,reject)=>{
            dbClient.MongoClient.connect(urlServer,(err,db)=>{
                if (err)reject(`Error on connect: ${err.code} \nstatus message:${err.message}`);
                dbInstance= db;
                resolve(true);
            })
            
    })
}
/**
 * es6 fat arrow function exported and exposed to test the connection to the db
 */
export const testConnection=()=>{
    console.log(`Testing connection....`);
    return new Promise((resolve,reject)=>{
        connect(urlServer).then((result)=>{
            disconnect();
            resolve(result);
            }).catch((error)=>{
                reject(error);
            })
    })
}
/**
 * es6 fat arrow function exported and exposed to create collections
 */
export const createCollections=(collections)=>{
    return new Promise((resolve,reject)=>{
        if (!dbInstance){
                reject(`Connect first to the database then create the collections`);
        }
        for (const item of collections){
            console.log(`Creating item in collections: ${item}`);
            dbInstance.createCollection(item,{autoIndexID:true},(err,db)=>{
                if (err) reject(`Error creating collection:${item}\nReason:${err.code} \nstatus message:${err.message}`);

            })
        }
        resolve(true); 
    })

        
}
/**
 * es6 fat arrow function exported and exposed to disconnect to the db
 */
export const disconnect=()=>{
    
    if (dbInstance){
        console.log(`Now closing connection`);
        dbInstance.close();
        dbInstance={};
    }
        
}
/**
 * es6 fat arrow function exported and exposed to inject data passed as object
 */
export const injectData=(value)=>{
    return new Promise((resolve,reject)=>{
        if (!dbInstance){
                reject(`Connect first to the database then create the collections`);
        }
        dbInstance.collection(value.collectionName).insertOne(value.Data,(err,data)=>{
                if (err) reject(`Error on insert item:${value.collectionName} \n${err.code} \nstatus message:${err.message}`);
                resolve(true);
        })
             
    })
}