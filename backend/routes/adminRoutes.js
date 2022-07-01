const express= require('express')
const router=express.Router()
const {loginAdmin ,addDoctors ,fetchUsers ,fetchDoctors ,editUser ,editDoctor ,deleteDoctor}=require('../controllers/adminControllers');

router.post('/login', loginAdmin);
router.get('/fetch-users', fetchUsers);
router.put('/edit-user/:id',editUser)
router.post('/add-doctors',addDoctors)
router.get('/fetch-doctors',fetchDoctors)
router.put('/edit-doctor/:id',editDoctor)
router.delete("/delete-doctor/:id",deleteDoctor)
module.exports=router;