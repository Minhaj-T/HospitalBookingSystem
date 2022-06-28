const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors ,fetchUsers ,fetchDoctors}=require('../controllers/adminControllers')

router.post('/login', loginAdmin);
router.get('/fetch-users', fetchUsers);
router.post('/add-doctors',addDoctors)
router.get('/fetch-doctors',fetchDoctors)

module.exports=router;