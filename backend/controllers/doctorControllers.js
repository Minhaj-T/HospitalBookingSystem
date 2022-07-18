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
      name: doctor.name,
      lastname: doctor.lastname,
      email: doctor.email,
      token: generateToken(doctor._id),
      address1: doctor.address1,
      address2: doctor.address2,
      phone: doctor.phone,
      gender: doctor.gender,
      specialization: doctor.specialization,
      age: doctor.age,
      biography: doctor.biography,
      city: doctor.city,
      state: doctor.state,
      profile_image: doctor.profile_image,
      country: doctor.city,
      postalCode: doctor.postalCode,
      degree: doctor.degree,
      college: doctor.college,
      completion: doctor.completion,
      hospitalname: doctor.hospitalname,
      from: doctor.from,
      to: doctor.to,
      designation: doctor.designation,
    });
  } else {
    res.status(400);
    throw new Error('invalid the Doctor data');
  }
});

// @desc  Authenticate doctor
// @rout  POST /api/doctor/edit-doctorDetails
const editDoctorDetails = asyncHandler(async (req, res) => {
  const doctorId = req.doctor.id;
  const newDoctorData = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    address1: req.body.address1,
    address2: req.body.address2,
    phone: req.body.mobile,
    gender: req.body.gender,
    age: req.body.age,
    biography: req.body.biography,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    postalCode: req.body.postalCode,
    degree: req.body.degree,
    college: req.body.college,
    completion: req.body.completion,
    hospitalname: req.body.hospitalname,
    from: req.body.from,
    to: req.body.to,
    designation: req.body.designation,
    profile_image: req.body.profile_image,
  };
  const doctor = await Doctor.findByIdAndUpdate(doctorId, newDoctorData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!doctor) throw new Error('doctor not found');
  res.status(200).json({
    name: doctor.name,
    lastname: doctor.lastname,
    email: doctor.email,
    specialization: doctor.specialization,
    token: generateToken(doctor._id),
    address1: doctor.address1,
    address2: doctor.address2,
    phone: doctor.phone,
    gender: doctor.gender,
    age: doctor.age,
    biography: doctor.biography,
    city: doctor.city,
    state: doctor.state,
    profile_image: doctor.profile_image,
    country: doctor.city,
    postalCode: doctor.postalCode,
    degree: doctor.degree,
    college: doctor.college,
    completion: doctor.completion,
    hospitalname: doctor.hospitalname,
    from: doctor.from,
    to: doctor.to,
    designation: doctor.designation,
  });
});

// @desc  change the doctor password
// @rout  POST /api/doctor/edit-password
const editDoctorPassword = asyncHandler(async (req, res) => {
  const doctorId = req.doctor.id;

  const { oldPassword, NewPassword } = req.body;

  const doctor = await Doctor.findById(doctorId);

  if (!doctor) throw new Error('invalid the doctor data');

  const Password = await bcrypt.compare(oldPassword, doctor.password);

  if (!Password) throw new Error('invalid Your Current  password');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(NewPassword, salt);
  const DoctorData = {
    password: hashedPassword,
  };

  const Data = await Doctor.findByIdAndUpdate(doctorId, DoctorData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ Data });
});

// @desc  add slotes
// @rout  POST /api/doctor/add-slotes
const addSlotes = asyncHandler(async (req, res) => {
  const doctorId = req.doctor._id;

  const { day, start, end } = req.body;
  console.log(day, start, end);

  if (!day || !start || !end) throw new Error(`please add all fields`);

  if (day === 'sunday') {
    const data = await Doctor.find({
      sunday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { sunday: { start, end } } });
  }
  if (day === 'monday') {
    const data = await Doctor.find({
      monday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { monday: { start, end } } });
  }
  if (day === 'tuesday') {
    const data = await Doctor.find({
      tuesday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { tuesday: { start, end } } });
  }
  if (day === 'wednesday') {
    const data = await Doctor.find({
      wednesday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { wednesday: { start, end } } });
  }
  if (day === 'thursday') {
    const data = await Doctor.find({
      thursday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { thursday: { start, end } } });
  }
  if (day === 'friday') {
    const data = await Doctor.find({
      friday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { friday: { start, end } } });
  }
  if (day === 'saturday') {
    const data = await Doctor.find({
      saturday: {
        $elemMatch: {
          $or: [{ start: start }, { end: end }],
        },
      },
    });
    if (data.length > 0) throw new Error('Slote already exists');
    await Doctor.updateOne({}, { $push: { saturday: { start, end } } });
  }
  const doctor= await Doctor.findOne({ doctorId })
    res.status(200).json({
        name: doctor.name,
        lastname: doctor.lastname,
        email: doctor.email,
        specialization: doctor.specialization,
        token: generateToken(doctor._id),
        address1: doctor.address1,
        address2: doctor.address2,
        phone: doctor.phone,
        gender: doctor.gender,
        age: doctor.age,
        biography: doctor.biography,
        city: doctor.city,
        state: doctor.state,
        profile_image: doctor.profile_image,
        country: doctor.city,
        postalCode: doctor.postalCode,
        degree: doctor.degree,
        college: doctor.college,
        completion: doctor.completion,
        hospitalname: doctor.hospitalname,
        from: doctor.from,
        to: doctor.to,
        designation: doctor.designation,
        sunday:doctor.sunday,
        monday: doctor.monday,
        tuesday: doctor.tuesday,
        wednesday: doctor.wednesday,
        thursday: doctor.thursday,
        friday: doctor.friday,
        saturday: doctor.saturday,
    });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d',
  });
};

module.exports = {
  loginDoctor,
  editDoctorDetails,
  editDoctorPassword,
  addSlotes,
};
