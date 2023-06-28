const {MongoClient} =require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

const database = 'newdb';

async function dbConect(){

    await client.connect();
    console.log('Successfully cnnected with server');
    let db = client.db(database);
    return  db.collection("data");  
}
module.exports= dbConect;