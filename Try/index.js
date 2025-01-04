const express=require('express');
const router = require('./routes/routes');
const { MongoConnection } = require('./connection');

const app=express();


// Database 

const url="mongodb://127.0.0.1:27017/TryDB"

MongoConnection(url)
    .then(()=>{return console.log("Mongodb Connected Successfully")})
    .catch((err)=>console.log("Mongodb Err :",err))


// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())



// Routes

app.use('/users',router)



// Server Port 

app.listen(400,()=>{
    console.log("Server Started at Port  400")

})