const express = require('express');
const {
  registerUser,
  loginUser,
  editUser,
  editUserPassword,
} = require('../controllers/usersController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/edit-userDetails', protect, editUser);
router.post('/edit-password', protect,editUserPassword);

module.exports = router;
