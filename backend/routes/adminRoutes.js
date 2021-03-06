const { Router } = require('express');
const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors ,fetchUsers,blockUser ,fetchDoctors 
    ,editUser ,editDoctor ,deleteDoctor ,addSpecialities 
    ,fetchSpecialties ,deleteSpecialties ,removeUser
     ,blockDoctor}=require('../controllers/adminControllers');
// const { isAdmin } = require('../middlewares/authMiddleware')

router.post('/login', loginAdmin);
router.get('/fetch-users', fetchUsers);
router.put('/edit-user/:id',editUser)
router.patch('/block-user',blockUser)
router.delete('/remove-user',removeUser)
router.post('/add-doctors',addDoctors)
router.get('/fetch-doctors',fetchDoctors)
router.put('/edit-doctor/:id',editDoctor)
router.patch('/block-doctor',blockDoctor)
router.delete("/delete-doctor/:id",deleteDoctor)
router.get('/fetch-specialties',fetchSpecialties)
router.post('/add-specialties',addSpecialities)
router.delete("/delete-specialties/:id",deleteSpecialties)
module.exports=router;