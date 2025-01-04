const express=require('express')
const { HandleUpload } = require('../controller/UploadController')


const Uploadroute=express.Router()



Uploadroute
.post('/upload',HandleUpload)





module.exports={Uploadroute}