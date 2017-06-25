/**
 * Handles the communication with the database
 */

module.exports = {
    /**
     * Test the connection to the database.
     * @param {*} url the database url
     */
    testConnection: function (url, MongoClient) {
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

    createDatabase: function () {

    },

    createCollections: function () {

    }
}