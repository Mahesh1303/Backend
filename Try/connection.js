const mongoose=require('mongoose')

const MongoConnection=async(url)=>{
return mongoose.connect(url)

}

module.exports={MongoConnection}