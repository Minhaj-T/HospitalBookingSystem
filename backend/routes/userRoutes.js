const express = require('express');
const {
  registerUser,
  loginUser,
  login_with_Google,
  editUser,
  editUserPassword,
  fetchAllDoctors,
  getDoctor,
  getAppointments
} = require('../controllers/usersController');
const{fetchSpecialties}=require('../controllers/adminControllers');
const{deleteSlotes}=require('../controllers/doctorControllers');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/login-google',login_with_Google);
router.put('/edit-userDetails', protect, editUser);
router.post('/edit-password', protect,editUserPassword);
router.get('/fetch-allDoctors',fetchAllDoctors);
router.get('/get-doctor',getDoctor);
router.get('/fetch-specialties',fetchSpecialties);
router.get('/get-appointments',protect,getAppointments)
router.post('/delete-slot',protect,deleteSlotes)

module.exports = router;
