require("express-async-errors")

const express = require('express');
const errorHandler = require("./handlers/errorHandler");
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();

mongoose.connect(process.env.mongoose_connection, {}).then(() => {
  console.log('MongoDB connected successfully!');
}).catch(() => {
  console.log("MongoDB connection failed!");
});

app.use(express.json());

app.use(errorHandler)

app.listen(8000, () => {
  console.log('Server started successfully!');
});