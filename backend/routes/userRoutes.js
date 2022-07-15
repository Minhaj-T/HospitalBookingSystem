const express = require('express');
const {
  registerUser,
  loginUser,
  editUser,
  editUserPassword,
  fetchAllDoctors,
  getDoctor
} = require('../controllers/usersController');
const{fetchSpecialties}=require('../controllers/adminControllers');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/edit-userDetails', protect, editUser);
router.post('/edit-password', protect,editUserPassword);
router.get('/fetch-allDoctors',fetchAllDoctors);
router.get('/get-doctor',getDoctor)
router.get('/fetch-specialties',fetchSpecialties)

module.exports = router;
