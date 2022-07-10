const express = require('express')
const { registerUser,loginUser,editUser} = require('../controllers/usersController')
const router=express.Router()
const { protect } = require('../middlewares/authMiddleware')


router.post('/signup', registerUser);
router.post('/login',loginUser);
router.put('/edit-userDetails',protect,editUser)
// router.get('/getuser',protect,getUser);

module.exports=router;