const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors ,fetchUsers ,fetchDoctors ,editUser ,editDoctor ,deleteDoctor ,addSpecialities}=require('../controllers/adminControllers');

router.post('/login', loginAdmin);
router.get('/fetch-users', fetchUsers);
router.put('/edit-user/:id',editUser)
router.post('/add-doctors',addDoctors)
router.get('/fetch-doctors',fetchDoctors)
router.put('/edit-doctor/:id',editDoctor)
router.delete("/delete-doctor/:id",deleteDoctor)
router.post('/add-specialities',addSpecialities)
module.exports=router;