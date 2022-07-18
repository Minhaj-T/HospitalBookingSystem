const express = require('express');
const router = express.Router();
const {
  loginDoctor,
  editDoctorDetails,
  editDoctorPassword,
  addSlotes,
} = require('../controllers/doctorControllers');
const { isDoctor } = require('../middlewares/authMiddleware');

router.post('/login', loginDoctor);
router.put('/edit-doctorDetails', isDoctor, editDoctorDetails);
router.put('/edit-password', isDoctor, editDoctorPassword);
router.post('/add-timeSlots',isDoctor,addSlotes)

module.exports = router;
