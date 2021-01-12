//Loading environment variables
require ('dotenv').config();

// Modules required
const express = require('express');
const { MongoClient } = require('mongodb');

// Connection URL => process.env.MONGO_URL

// Database Name => process.env.MONGO_DBNAME

// Use connect method to connect to the server
const client = MongoClient.connect(process.env.MONGO_URL);

const db = client.then (client => client.db(process.env.MONGO_DBNAME));

//Server creation
const app = express();

// Port
const port = process.env.PORT;


// Roads 
app.get('/', async (req,res) => {
    // All the pokemon
    const db = await getDb();
    const pokemon = await db.collection('pokedex').find().toArray();
    console.log(pokemon);
    res.json(pokemon);
})

app.get('/type/:type', (req, res) => {
    // Pokemon type : poison for example
})


//Server launched
app.listen(port, () => console.log("ça marche !")); 