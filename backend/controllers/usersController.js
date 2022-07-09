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
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
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
  console.log('this is the find email user', user);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('invalid the user data');
  }
});

// @desc  get the data into User
// @rout  POST /api/users/signup
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
