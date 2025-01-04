const mongoose=require('mongoose')


const UserSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    }


},{timestamps:true})

const Userdb = mongoose.model('User', UserSchema);


module.exports=Userdb