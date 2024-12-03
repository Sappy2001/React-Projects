const express =require('express')
const mongoose =require('mongoose')
const app=express()
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost/EventDB';
// const client = new MongoClient(url);
// const dbName = 'EventDB';


mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected...')
})
//telling your express framework that you will use json in post request
app.use(express.json())

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }
// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

//for routing
  const eventRouter=require('./Routers/Events')
  //middleware for the url
  //for all the Events request to eventRouter
  app.use('/Events',eventRouter)


  //listening to the server through port 9000
  app.listen(9000,function(){
      console.log("Server started")
  })