const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

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

  const  Data= await User.findByIdAndUpdate(userId, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({Data})
});


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  editUser,
  editUserPassword
};
