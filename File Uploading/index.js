const express=require('express')
const app=express()
const multer=require("multer")
const cors=require("cors")

const port=400





// Middlewares

app.use(express.urlencoded({extended:true}))
app.use(express.json())








// 

app.listen(port,()=>{
    console.log(`server started at port : ${port}`)
})




