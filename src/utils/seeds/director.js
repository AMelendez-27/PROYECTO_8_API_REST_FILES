const mongoose = require('mongoose');
const Director = require('../../api/models/director');
const directors = require('../../data/director');

const launchSeed = async () => {
  try {
    await mongoose.connect("mongodb+srv://ddbb_admin:admin!!@cluster0.blao9rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    await Director.collection.drop();
    console.log("Directors collection dropped successfully");

    await Director.insertMany(directors);
    console.log("Directors seeded successfully");

    await mongoose.disconnect();
    console.log("Database disconnected successfully");
  } catch (error) {
    console.error(error);
  }
};

launchSeed();