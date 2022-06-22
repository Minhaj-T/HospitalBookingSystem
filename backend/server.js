const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require("cors");
const {errorHandler,notFound}= require('./middlewares/errorMiddleware')

// Mongodb Connection
connectDB();
const app= express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

//Routes
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))


// Error Middleware
app.use(notFound)
app.use(errorHandler);

// Port Settings
const PORT= process.env.PORT|| 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))

