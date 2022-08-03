const express = require('express');
const router = express.Router();
const {
  loginDoctor,
  editDoctorDetails,
  editDoctorPassword,
  addSlotes,
  deleteSlotes,
  getAppointments,
  ChangeAppointmentStatus,
  addPrescription,
  addMedicalRecords,
  addBill
} = require('../controllers/doctorControllers');
const { isDoctor } = require('../middlewares/authMiddleware');

router.post('/login', loginDoctor);
router.put('/edit-doctorDetails', isDoctor, editDoctorDetails);
router.put('/edit-password', isDoctor, editDoctorPassword);
router.post('/add-timeSlots',isDoctor,addSlotes)
router.patch('/delete-timeSlots',isDoctor,deleteSlotes)
router.get('/get-appointments',isDoctor,getAppointments)
router.patch('/changeStatus-appointments',isDoctor,ChangeAppointmentStatus)
router.post('/add-prescription',isDoctor,addPrescription)
router.post('/add-medical-records',isDoctor,addMedicalRecords)
router.post('/add-billing',isDoctor,addBill)

module.exports = router;
