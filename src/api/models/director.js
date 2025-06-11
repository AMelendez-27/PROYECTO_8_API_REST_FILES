const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  img: {type: String, required: true}
}, {
    timestamps: true, 
    collection: "directors"
  });

module.exports = mongoose.model('directors', directorSchema, "directors");