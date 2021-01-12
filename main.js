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
    // Lister tous les pokemon
    const pokemon = await (await db).collection('pokedex').find().toArray();
    console.log(pokemon);
    res.json(pokemon);
})

app.get('/type/:type', (req, res) => {
    // Lister les pokemon d'un type donné (ex:poison)
})


//Server launched
app.listen(port, () => console.log("ça marche !"));