const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Admin = require('../models/adminModel');
const Doctor = require('../models/doctorModel');

// user protect router
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

//admin protect routes
const isAdmin=asyncHandler(async(req,res, next)=>{
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
){
  try {
    token = req.headers.authorization.split(" ")[1];
      console.log("this is the tocken", token);

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.admin = await Admin.findById(decoded.id).select("-password");
      console.log("the user fetched the jwt", req.admin);

      next();
  } catch (error) {
    console.log(error);
      res.status(401);
      throw new Error("Not authorized");
  }
}
if (!token) {
  res.status(401);
  throw new Error("Not authorized, no token");
}
})

//admin protect routes
const isDoctor=asyncHandler(async(req,res, next)=>{
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
){
  try {
    token = req.headers.authorization.split(" ")[1];
    
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.doctor = await Doctor.findById(decoded.id).select("-password");

      next();
  } catch (error) {
    console.log(error);
      res.status(401);
      throw new Error("Not authorized");
  }
}
if (!token) {
  res.status(401);
  throw new Error("Not authorized, no token");
}
})



module.exports = { protect,isAdmin,isDoctor };
