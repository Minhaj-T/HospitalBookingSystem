const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const { customAlphabet } = require("nanoid");
const Doctor = require("../models/doctorModel");
const User= require("../models/userModel");
const { find, findByIdAndUpdate } = require("../models/adminModel");

// @desc  Authenticate Admin
// @rout  POST /api/admin/login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("this is the admin details coming from frontent",req.body);

  const admin = await Admin.findOne({ email });
  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({
      admin,
      email: req.body.email,
      password: req.body.password,
    });
  } else {
    res.status(400);
    throw new Error("invalid the Admin data");
  }
});



// @desc  get users
// @rout  GET /api/admin/fetch-users
const fetchUsers= asyncHandler(async(req,res)=>{
  
  const user= await User.find({})
  if (user) {
    res.status(200).json({
      user
    })
  }else{
    res.status(400);
    throw new Error("some error occurred...");
  }
})


// @desc  edit the users
// @rout  GET /api/admin//edit-user/:id
const editUser= asyncHandler(async(req,res)=>{
  const userId=req.params.id
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
      user
    });
  } catch (error) {
    res.status(400).json(error);
  }
});
  


// @desc  get Doctors
// @rout  GET /api/admin/fetch-doctors 
const fetchDoctors=asyncHandler(async(req,res)=>{
  const doctor=await Doctor.find({})
  if(doctor){
    res.status(200).json({
      doctor
    })
  }else{
    res.status(400)
    throw new Error("some error occurred...");
  }
})

// @desc  Add Doctors
// @rout  POST /api/admin/add-doctors
const addDoctors = asyncHandler(async (req, res) => {
  const { name,email, password } = req.body;

  // generate a random id for Doctors
  const nanoid = customAlphabet(`123DOC`, 5);
  const doctorID = nanoid();

  // Check if user exists
  const doctorExists = await Doctor.findOne({ email });

  if (doctorExists) {
    res.status(400);
    throw new Error("Doctor already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a user
  const doctor = await Doctor.create({
    doctorID,
    name,
    email,
    password: hashedPassword,
  });

  if (doctor) {
    res.status(201).json({
      _id: doctor.id,
      doctorID: doctor.doctorID,
      name: doctor.name,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc  get users
// @rout  GET /api/admin//edit-user/:id
const editDoctor= asyncHandler(async(req,res)=>{
  const doctorId=req.params.id
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
      doctor
    });
  } catch (error) {
    res.status(400).json(error);
  }
});



module.exports = {
  loginAdmin,
  addDoctors,
  fetchUsers,
  fetchDoctors,
  editUser,
  editDoctor
};
