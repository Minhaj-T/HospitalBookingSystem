const express= require('express');
const router=express.Router()
const { loginDoctor } = require('../controllers/doctorControllers');


router.post('/login',loginDoctor);


module.exports =router;