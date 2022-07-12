const express= require('express');
const router=express.Router()
const { loginDoctor,editDoctorDetails } = require('../controllers/doctorControllers');
const { isDoctor } = require('../middlewares/authMiddleware');


router.post('/login',loginDoctor);
router.put('/edit-doctorDetails',isDoctor,editDoctorDetails);


module.exports =router;