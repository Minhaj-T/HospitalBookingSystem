const express = require('express')
const { registerUser,loginUser,getUser } = require('../controllers/usersController')
const router=express.Router()


router.post('/signup', registerUser);
router.post('/login',loginUser);
router.get('/getuser',getUser);

module.exports=router;