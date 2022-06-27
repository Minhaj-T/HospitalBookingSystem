const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors ,fetchUsers}=require('../controllers/adminControllers')

router.post('/login', loginAdmin);
router.post('/add-doctors',addDoctors)
router.get('/fetch-users', fetchUsers);

module.exports=router;