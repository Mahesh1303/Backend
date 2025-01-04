const express=require('express')

const router =express.Router()

const {HandleCreateUser,HandleGetAlluser,HandleGetUserWithId,HandleUpdateUserwithId,HandleDeleteUser}=require('../controllers/controller')


router
    .route('/')
    .get(HandleGetAlluser)
    .post(HandleCreateUser)


router
    .route('/:id')
    .get(HandleGetUserWithId)
    .patch(HandleUpdateUserwithId)
    .delete(HandleDeleteUser)


module.exports=router;
