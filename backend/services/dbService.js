
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = (process.env.NODE_ENV === 'production')? 
    'mongodb+srv://michaelo:pDcZItFgqnXVTEJ8@cluster0-0s5s3.mongodb.net/test?retryWrites=true&w=majority' 
    : 'mongodb://localhost:27017';
    
// Database Name
const dbName = 'toy';

var dbConn = null;

async function connect() {
    //If there is a connection already, just return it.
    if (dbConn) return dbConn;
    //else, we try to connect
    try {
        const client = await MongoClient.connect(url, {useNewUrlParser: true});
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}


async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection
}