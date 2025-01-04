const Userdb= require('../models/models')




const HandleGetAlluser=async(req,res)=>{
    const AllDbUsers=await Userdb.find({})
    return res.json(AllDbUsers)

}

const HandleCreateUser=async(req,res)=>{
    const user=req.body;
    if(!user || !user.firstname || !user.lastname || !user.email){
        return res.status(400).json({
            msg:"Required All fields "

        })
    }
    const result =await Userdb.create({
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email
    })

    console.log("result :",result)

    return res.status(201).json({
        status:"Successfully Created New User "


    })
}


const HandleGetUserWithId=async(req,res)=>{
    const user= await Userdb.findById(req.params.id)
    if (!user){
        res.status(404).json({
            msg:"No user Found"
        })
    }
    return res.json(user)

}

const HandleUpdateUserwithId= async(req,res)=>{
    await Userdb.findIdAndUpdate(req.params.id,{firstname,lastname,email})

    return(res.json({
        status:"Success",
        User:`${req.params.id}`,
        res:"Successfully Updated"


    }))

}

const HandleDeleteUser=async(req,res)=>{
        await Userdb.findByIdAndDelete(req.params.id)
        return (res.json({
            status:"Successfully deleted "
            ,
            User:`${req.params.id}`,

        }))


}






module.exports={
    HandleGetAlluser,
    HandleCreateUser,
    HandleGetUserWithId,
    HandleUpdateUserwithId,
    HandleDeleteUser
}