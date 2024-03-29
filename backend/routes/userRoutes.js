const express = require('express');
const {
  registerUser,
  loginUser,
  login_with_Google,
  editUser,
  editUserPassword,
  fetchAllDoctors,
  getDoctor,
  getAppointments,
  getUser,
  getUserAppointments,
  addfavourites,
  removeFavorite,
  getFavourites,
} = require('../controllers/usersController');
const{fetchSpecialties}=require('../controllers/adminControllers');
const{deleteSlotes, getPrescription, getMedicalRecords, getAllbills}=require('../controllers/doctorControllers');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/login-google',login_with_Google);
router.get('/fetch-allDoctors',fetchAllDoctors);
router.get('/fetch-specialties',fetchSpecialties);
router.get('/get-doctor',getDoctor);
router.get('/get-user',getUser);
router.put('/edit-userDetails', protect, editUser);
router.post('/edit-password', protect,editUserPassword);
router.get('/get-appointments',protect,getAppointments)
router.get('/get-user-Allappointments',protect,getUserAppointments)
router.post('/delete-slot',protect,deleteSlotes)
router.post('/add-favourites',protect,addfavourites)
router.put('/remove-favourites',protect,removeFavorite)
router.get('/get-favourites',protect,getFavourites)
router.get('/get-prescription',protect,getPrescription)
router.get('/get-medical-records',protect,getMedicalRecords)
router.get('/get-bills',protect,getAllbills)


module.exports = router;
