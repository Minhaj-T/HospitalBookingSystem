const { Router } = require('express');
const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors ,fetchUsers,blockUser ,fetchDoctors 
    ,editUser ,editDoctor ,deleteDoctor ,addSpecialities 
    ,fetchSpecialties ,deleteSpecialties ,removeUser
     ,blockDoctor,widgetsValues,appointmentStatus,
    latestTransactions,specializationsRevenue,
    latestUsers,dailyRevenue}=require('../controllers/adminControllers');
const { isAdmin } = require('../middlewares/authMiddleware')

router.post('/login', loginAdmin);
router.patch('/block-user',blockUser)
router.patch('/block-doctor',blockDoctor)
router.get('/fetch-users',isAdmin,fetchUsers);
router.put('/edit-user/:id',isAdmin,editUser)
router.delete('/remove-user',isAdmin,removeUser)
router.post('/add-doctors',isAdmin,addDoctors)
router.get('/fetch-doctors',isAdmin,fetchDoctors)
router.delete("/delete-doctor/:id",isAdmin,deleteDoctor)
router.get('/fetch-specialties',isAdmin,fetchSpecialties)
router.post('/add-specialties',isAdmin,addSpecialities)
router.delete("/delete-specialties/:id",isAdmin,deleteSpecialties)
router.get('/get-widget-count',isAdmin,widgetsValues)
router.get('/appointment-statistics',isAdmin,appointmentStatus)
router.get('/latest-transactions',isAdmin,latestTransactions)
router.get('/specialization-revenue',isAdmin,specializationsRevenue)
router.get('/latest-users',isAdmin,latestUsers)
router.get('/daily-revenue',isAdmin,dailyRevenue)
module.exports=router;