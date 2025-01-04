const express=require('express')
const ConnectUserDb = require('./connection')
const app=express()
const cors=require('cors')
const userrouter = require('./routes/routes')
const port =600







// Database 
const userdburl="mongodb://127.0.0.1:27017/user-Auth"
ConnectUserDb(userdburl)
.then(()=>{
console.log("MongoDb Connected Successfully")

})
.catch((err)=>{

console.log("Error in connecting MongoDb :",err)
})





// MiddleWares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// Routes

app.use('/user',userrouter)

// 


app.listen(port,()=>{

console.log(`Server Started at Port : ${port}`)

})