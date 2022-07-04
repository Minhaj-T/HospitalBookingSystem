const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const Doctor = require('../models/doctorModel');
const jwt = require('jsonwebtoken');

// @desc  Authenticate doctor
// @rout  POST /api/doctor/login
const loginDoctor = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const doctor = await Doctor.findOne({ email });
  if (Doctor && (await bcrypt.compare(password, doctor.password))) {
    res.status(200).json({
      _id: doctor.id,
      name: doctor.name,
      email: doctor.email,
      token: generateToken(doctor._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid the Doctor data');
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = {
  loginDoctor,
};
