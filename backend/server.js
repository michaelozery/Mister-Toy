const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
const toyRoutes= require('./api/ToyRoutes')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use('/api/toy', toyRoutes)
app.get('/', (req, res) => res.send('Hello World!'))




app.listen(port, () => console.log(`Example app listening on ${port}`))




console.log('Hello Node, Hi Mongo');
const MongoClient = require('mongodb').MongoClient;

const toyService = require('./services/toyService');

(async () => {
    var toys = await toyService.query()
    // var customer = await customerService.getById('5d22eaac9bc7f3a0e317d12a')

    // customer.balance += 100;
    // var updatedCustomer = await customerService.update(customer)

    // const newCustomer = {fullName : 'Shmupika'};

    // var addedCustomer = await customerService.add(newCustomer)

    // await customerService.remove('5d22eaac9bc7f3a0e317d129')
})();


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'toyDB';

function tryMongo() {
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, client) {

        if (err) return console.log('Cannot connect to DB');
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        const collection = db.collection('customer');
        // Find some documents
        collection.find({ balance: { $gte: 100 } }).toArray(function (err, docs) {
            if (err) return console.log('Cannot find customers');
        });

        client.close();
    });
}