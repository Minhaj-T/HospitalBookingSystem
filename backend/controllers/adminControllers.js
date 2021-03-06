const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const { customAlphabet } = require('nanoid');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');
const Specialties = require('../models/specialties');
const jwt = require('jsonwebtoken');
// const { find, findByIdAndUpdate } = require("../models/adminModel");

// @desc  Authenticate Admin
// @rout  POST /api/admin/login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid the Admin data');
  }
});

// @desc  get users
// @rout  GET /api/admin/fetch-users
const fetchUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  if (user) {
    res.status(200).json({
      user,
    });
  } else {
    res.status(400);
    throw new Error('some error occurred...');
  }
});

// @desc  edit the users
// @rout  PUT /api/admin/edit-user/:id
const editUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
    };
    const user = await User.findByIdAndUpdate(userId, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc  block user
// @rout  PATCH /api/admin/block-user
const blockUser = asyncHandler(async (req, res) => {
  const { id, status } = req.query;
  let user = await User.findById(id);
  user.isBlocked = status;
  user.save();
  res.status(200).json({ user });
});

// @desc  DELETE the User
// @rout  DELETE /api/admin/remove-user/:id
const removeUser = asyncHandler(async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    const data = await user.remove();

    res.status(200).json({ userId: data._id });
  } catch (error) {
    res.json(error);
  }
});

// @desc  get Doctors
// @rout  GET /api/admin/fetch-doctors
const fetchDoctors = asyncHandler(async (req, res) => {
  const doctor = await Doctor.find({});
  if (doctor) {
    res.status(200).json({
      doctor,
    });
  } else {
    res.status(400);
    throw new Error('some error occurred...');
  }
});

// @desc  Add Doctors
// @rout  POST /api/admin/add-doctors
const addDoctors = asyncHandler(async (req, res) => {
  const { name, email, password, gender, phone, specialization } = req.body;
  // generate a random id for Doctors
  const nanoid = customAlphabet(`123DOC`, 5);
  const doctorID = nanoid();

  // Check if doctor exists
  const doctorExists = await Doctor.findOne({ email });
  if (doctorExists) {
    res.status(400);
    throw new Error('Doctor already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a doctor
  const doctor = await Doctor.create({
    doctorID,
    name,
    email,
    gender,
    phone,
    specialization,
    password: hashedPassword,
  });
  if (doctor) {
    res.status(201).json({
      _id: doctor.id,
      doctorID: doctor.doctorID,
      name: doctor.name,
      email: doctor.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc  edit doctor details
// @rout  PUT /api/admin/edit-doctor/:id
const editDoctor = asyncHandler(async (req, res) => {
  const doctorId = req.params.id;
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
    };
    const doctor = await Doctor.findByIdAndUpdate(doctorId, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc  DELETE the Doctor
// @rout  DELETE /api/admin/delete-doctor/:id
const deleteDoctor = asyncHandler(async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctor = await Doctor.findById(doctorId);
    const data = await doctor.remove();
    res.status(200).json({ doctorId: data._id });
  } catch (error) {
    res.json(error);
  }
});

// @desc  block Doctor
// @rout  PATCH /api/admin/block-Doctor
const blockDoctor = asyncHandler(async (req, res) => {
  const { id, status } = req.query;
  let doctor = await Doctor.findById(id);
  doctor.isBlocked = status;
  doctor.save();
  res.status(200).json({ doctor });
});

// @desc  GET add the Specialties
// @rout  ERT /api/admin/fetch-specialties
const fetchSpecialties = asyncHandler(async (req, res) => {
  const specialties = await Specialties.find({});
  if (specialties) {
    res.status(200).json({
      specialties: specialties,
    });
  } else {
    res.status(400);
    throw new Error('some error occurred...');
  }
});

// @desc  POST add the Specialties
// @rout  POST /api/admin/add-specialties/
const addSpecialities = asyncHandler(async (req, res) => {
  const data = req.body;
  //Create a specialties
  const specialities = await Specialties.create({
    name: data.name,
    img: data.img,
  });
  if (specialities) {
    res.status(201).json({
      _id: specialities.id,
      name: specialities.name,
      img: specialities.img,
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

// @desc  DELETE add the Specialties
// @rout  DELETE /api/admin/delete-specialties
const deleteSpecialties = asyncHandler(async (req, res) => {
  const Id = req.params.id;
  try {
    const specialty = await Specialties.findById(Id);
    const data = await specialty.remove();
    res.status(200).json({ specialtyId: data._id });
  } catch (error) {
    res.json(error);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = {
  loginAdmin,
  addDoctors,
  fetchUsers,
  blockUser,
  fetchDoctors,
  editUser,
  editDoctor,
  deleteDoctor,
  addSpecialities,
  fetchSpecialties,
  deleteSpecialties,
  removeUser,
  blockDoctor,
};
