const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors}=require('../controllers/adminControllers')

router.post('/login', loginAdmin);
router.post('/add-doctors',addDoctors)

module.exports=router;