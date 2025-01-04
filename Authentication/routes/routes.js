const express=require('express')
const { HandleSignUp,HandleUserLogin } = require('../controllers/cotroller')

const userrouter=express.Router()

userrouter.post('/',HandleSignUp)
userrouter.post('/login',HandleUserLogin)








module.exports=userrouter