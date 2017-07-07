/**
 * Handles the communication with the database
 */

var MongoClient = require('mongodb').MongoClient;

var _database;

module.exports = {
    /**
     * Returns the database connection object.
     */
    getDatabaseConnection: function () {
        return _database;
    },

    /**
     * Sets the database connection object.
     */
    setDatabaseConnection: function (db) {
        _database = db;
    },
    /**
     * Getting the database object:
     * https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
     */
    connectToDatabase: function (url, callback) {
        MongoClient.connect(url, function (err, db) {
            _database = db;
            return callback(err);
        });
    },

    /**
     * Test the connection to the database.
     * @param {*} url the database url
     */
    testConnection: function (url) {
        // check the server connection

        MongoClient.connect(url, function (err, db) {

            if (db === null) {
                console.log("Database " + url + " not available!");
            } else {
                if (err !== null) {
                    console.log("Database Test Not OK: Cannot Connect.");
                } else {
                    console.log("Database Test OK: Connected successfully.");
                }
                db.close();
            }
        });
    },

    createCollections: function (url, collections, db) {
        var i, collectionsLength = collections.length;

        if (db !== undefined && db !== null) {
            // create the collections if the DB is already defined
            for (i = 0; i < collectionsLength; i++) {
                db.createCollection(collections[i]);
            }
        } else {
            // otherwise, connect to the database and then create the collections
            MongoClient.connect(url, function (err, db) {
                for (i = 0; i < collectionsLength; i++) {
                    db.createCollection(collections[i]);
                }
                db.close();
            });
        }

    }
}