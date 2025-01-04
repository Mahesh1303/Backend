const mongoose=require('mongoose')

const ConnectUserDb=async(url)=>{

mongoose.connect(url)

}

module.exports=ConnectUserDb