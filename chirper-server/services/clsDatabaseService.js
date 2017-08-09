import * as dbClient from 'mongodb';

class DatabaseService{
    
    constructor(){
        this.urlServer='';
        this.dbInstance={};
    }
    get getDbInstance(){
        return this.dbInstance;
    }
    get getdbUrl(){
        return this.url;
    }
    set setDbUrl(mongoUrl){
        this.urlServer=mongoUrl;
    }
   
    /**
     *  
     * es6 fat arrow connect function working with promises instead of callbacks as per inclusion on 2.x
     */
    connect(){
        return new Promise((resolve,reject)=>{
            dbClient.MongoClient.connect(this.urlServer,(err,db)=>{
                if (err)reject(`Error on connect: ${err.code} \nstatus message:${err.message}`);
                this.dbInstance= db;
                resolve(true);
            })
            
        })
    }
    /**
     * es6 fat arrow disconnect function
     */
    disconnect(){
        
        if (this.dbInstance){
            console.log(`Now closing connection`);
            this.dbInstance.close();
            this.dbInstance={};
        }
        
    }


    

    /**
     * es6 fat arrow test connection
     */
    testConnection(){
        //console.log(`test connection url:\n${this.urlServer}`);
        console.log(`Testing connection....`);
        return new Promise((resolve,reject)=>{
            this.connect(this.urlServer).then((result)=>{
                this.disconnect();
                resolve(result);
            }).catch((error)=>{
                reject(error);
            })
        })
        
    }
    
    /**
     * es6 fat arrow function to generate the  collections
     */
    createCollections(collections){
        
        return new Promise((resolve,reject)=>{
            if (!this.dbInstance){
                reject(`Connect first to the database then create the collections`);
            }
            for (const item of collections){
                console.log(`Creating item in collections: ${item}`);
                this.dbInstance.createCollection(item,{autoIndexID:true},(err,db)=>{
                    if (err) reject(`Error creating collection:${item}\nReason:${err.code} \nstatus message:${err.message}`);

                })
            }
            resolve(true); 
        })

        
    }
    injectData(value){
        return new Promise((resolve,reject)=>{
            if (!this.dbInstance){
                reject(`Connect first to the database then create the collections`);
            }
            this.dbInstance.collection(value.collectionName).insertOne(value.Data,(err,data)=>{
                if (err) reject(`Error on insert item:${value.collectionName} \n${err.code} \nstatus message:${err.message}`);
                resolve(true);
            })
             
        })
    }
}

export default DatabaseService;


