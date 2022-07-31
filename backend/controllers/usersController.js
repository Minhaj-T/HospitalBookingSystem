const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const Doctor = require('../models/doctorModel');
const Specialities = require('../models/specialties');
const Transactions = require('../models/transactions');
const ObjectId = mongoose.Types.ObjectId;

// @desc  Register New User
// @rout  POST /api/users/signup
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    mobile,
    age,
    allergies,
    blood_group,
    bp,
    city,
    gender,
    glucose,
    heart_rate,
    height,
    height_unit,
    profile_image,
    state,
    weight,
    weight_unit,
    zip_code,
  } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error(`please add all fields`);
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    address,
    mobile,
    age,
    allergies,
    blood_group,
    bp,
    city,
    gender,
    glucose,
    heart_rate,
    height,
    height_unit,
    profile_image,
    state,
    weight,
    weight_unit,
    zip_code,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      address: user.address,
      mobile: user.mobile,
      age: user.age,
      allergies: user.allergies,
      blood_group: user.blood_group,
      bp: user.bp,
      city: user.city,
      gender: user.gender,
      glucose: user.glucose,
      heart_rate: user.heart_rate,
      height: user.height,
      height_unit: user.height_unit,
      profile_image: user.profile_image,
      state: user.state,
      weight: user.weight,
      weight_unit: user.weight,
      zip_code: user.zip_code,
      favourites: user.favourites,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc  Authenticate User
// @rout  POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //get for user email
  const user = await User.findOne({ email });
  if (user.isBlocked) throw new Error(`User ${user.email} is blocked`);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      address: user.address,
      mobile: user.mobile,
      age: user.age,
      allergies: user.allergies,
      blood_group: user.blood_group,
      bp: user.bp,
      city: user.city,
      gender: user.gender,
      glucose: user.glucose,
      heart_rate: user.heart_rate,
      height: user.height,
      height_unit: user.height_unit,
      profile_image: user.profile_image,
      state: user.state,
      weight: user.weight,
      weight_unit: user.weight,
      zip_code: user.zip_code,
      favourites: user.favourites,
    });
  } else {
    res.status(400);
    throw new Error('invalid the user data');
  }
});

// @desc  Authenticate User
// @rout  POST /api/users/login
const login_with_Google = asyncHandler(async (req, res) => {
  const { email, email_verified } = req.body;

  if (!email_verified) throw new Error('email not verified');
  // //get for user email
  const user = await User.findOne({ email });
  if (user.isBlocked) throw new Error(`User ${user.email} is blocked`);
  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      address: user.address,
      mobile: user.mobile,
      age: user.age,
      allergies: user.allergies,
      blood_group: user.blood_group,
      bp: user.bp,
      city: user.city,
      gender: user.gender,
      glucose: user.glucose,
      heart_rate: user.heart_rate,
      height: user.height,
      height_unit: user.height_unit,
      profile_image: user.profile_image,
      state: user.state,
      weight: user.weight,
      weight_unit: user.weight,
      zip_code: user.zip_code,
      favourites: user.favourites,
    });
  } else {
    res.status(400);
    throw new Error('invalid the user data');
  }
});

// @desc  Edit User Details
// @rout  PUT /api/edit-userDetails/:id
const editUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      age: req.body.age,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      profile_image: req.body.profile_image,
    };
    const user = await User.findByIdAndUpdate(userId, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      address: user.address,
      mobile: user.mobile,
      age: user.age,
      allergies: user.allergies,
      blood_group: user.blood_group,
      bp: user.bp,
      city: user.city,
      gender: user.gender,
      glucose: user.glucose,
      heart_rate: user.heart_rate,
      height: user.height,
      height_unit: user.height_unit,
      profile_image: user.profile_image,
      state: user.state,
      weight: user.weight,
      weight_unit: user.weight,
      zip_code: user.zip_code,
      favourites: user.favourites,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

// @desc  change the user password
// @rout  POST /api/users/edit-password
const editUserPassword = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { oldPassword, NewPassword } = req.body;

  const user = await User.findById(userId);

  if (!user) throw new Error('invalid the user data');

  const Password = await bcrypt.compare(oldPassword, user.password);

  if (!Password) throw new Error('invalid Your Current  password');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(NewPassword, salt);
  const newUserData = {
    password: hashedPassword,
  };

  const Data = await User.findByIdAndUpdate(userId, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ Data });
});

// @desc  get Doctors
// @rout  GET /api/users/fetch-allDoctors
const fetchAllDoctors = asyncHandler(async (req, res) => {
  const { skip, limit } = req.query;
  const doctor = await Doctor.find({}).limit(limit);
  if (doctor) {
    res.status(200).json({
      doctor,
    });
  } else {
    res.status(400);
    throw new Error('some error occurred...');
  }
});

// @desc  get a Doctor using id
// @rout  GET /api/users/get-doctor/:id
const getDoctor = asyncHandler(async (req, res) => {
  const { id } = req.query;
  const data = await Doctor.findById(id);
  if (!data) throw new Error(`Couldn't find ${id}`);
  res.status(200).json({
    data,
  });
});

// @desc  get a User using id
// @rout  GET /api/users/get-doctor/:id
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.query;
  const data = await User.findById(id);
  if (!data) throw new Error(`Couldn't find ${id}`);
  res.status(200).json({
    data,
  });
});

// @desc  get the appointment using user id
// @rout    GET /users /api/users/get-appointments
const getAppointments = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const data = await Transactions.find({ userId: userId })
    .populate({
      path: 'userId',
      select: {
        _id: 1,
        name: 1,
        profile_image: 1,
        mobile: 1,
        email: 1,
        state: 1,
        city: 1,
      },
    })
    .populate({
      path: 'doctorId',
      select: {
        name: 1,
        profile_image: 1,
        specialization: 1,
        lastname: 1,
        doctorID: 1,
      },
    });
  res.status(200).json({ data });
});

// @desc  get the appointment using user id
// @rout    GET /users /api/users/get-user-Allappointments
const getUserAppointments = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const appointments = await Transactions.find({ userId: userId });
  res.status(200).json({ appointments });
});

// @desc  add the doctor from user favorites
// @rout  POST /api/users/add-favourites
const addfavourites = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { doctorId } = req.body;
  const exists = await User.findOne( {_id:userId} ).elemMatch('favourites', {
    doctorId:ObjectId(doctorId),
  });

  if (exists) throw new Error('The doctor already exists');
  const Data = await User.findByIdAndUpdate(userId, {
    $push: { favourites: {  doctorId:ObjectId(doctorId)  } },
  });
  const user = await User.findById(userId);
  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
    address: user.address,
    mobile: user.mobile,
    age: user.age,
    allergies: user.allergies,
    blood_group: user.blood_group,
    bp: user.bp,
    city: user.city,
    gender: user.gender,
    glucose: user.glucose,
    heart_rate: user.heart_rate,
    height: user.height,
    height_unit: user.height_unit,
    profile_image: user.profile_image,
    state: user.state,
    weight: user.weight,
    weight_unit: user.weight,
    zip_code: user.zip_code,
    favourites: user.favourites,
  });
});

// @desc  remove the doctor from user favorites
// @rout  PUT /api/users/remove-favourites
const removeFavorite= asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { doctorId } = req.body;
  const Data = await User.findByIdAndUpdate(userId, {
    $pull: { favourites: { doctorId:ObjectId(doctorId)   } },
  });
  const user = await User.findById(userId);
  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
    address: user.address,
    mobile: user.mobile,
    age: user.age,
    allergies: user.allergies,
    blood_group: user.blood_group,
    bp: user.bp,
    city: user.city,
    gender: user.gender,
    glucose: user.glucose,
    heart_rate: user.heart_rate,
    height: user.height,
    height_unit: user.height_unit,
    profile_image: user.profile_image,
    state: user.state,
    weight: user.weight,
    weight_unit: user.weight,
    zip_code: user.zip_code,
    favourites: user.favourites,
  });
});

// @desc  get the all favourite doctor details
// @rout  GET /api/users/get-favourites
const getFavourites = asyncHandler(async(req,res)=>{
  const userId = req.user._id;
  const data= await User.findById(userId).populate({
    path: 'favourites.doctorId',
    select: {
      _id: 1,
      name: 1,
      profile_image: 1,
      mobile: 1,
      email: 1,
      state: 1,
      city: 1,
      specialization:1
    },
  })
res.status(200).send({data})


})



const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  editUser,
  editUserPassword,
  fetchAllDoctors,
  getDoctor,
  login_with_Google,
  getAppointments,
  getUser,
  getUserAppointments,
  addfavourites,
  removeFavorite,
  getFavourites,
};
