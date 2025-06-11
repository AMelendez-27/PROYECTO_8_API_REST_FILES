require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const directorRouter = require('./src/api/routes/director');
const filmRouter = require('./src/api/routes/film');
const { connectCloudinary } = require('./src/config/cloudinary');


const app = express();

app.use(express.json());

app.use("/api/v1/directors", directorRouter);
app.use("/api/v1/films", filmRouter);

connectDB();
connectCloudinary();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});