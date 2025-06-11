const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: {type: String, required: true},
  genere: {type: String, required: true},
  duration: {type: Number, required: true},
  director: { type: mongoose.Schema.Types.ObjectId, ref: 'directors', required: true },
  img: { type: String, required: true}
}, {
    timestamps: true, 
    collection: "films"
  });

module.exports = mongoose.model('films', filmSchema, "films");