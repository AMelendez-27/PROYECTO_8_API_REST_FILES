const Director = require('../models/director');

const getDirectors = async (req, res, next) => {
  try {
    const directors = await Director.find();
    return res.status(200).json(directors);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getDirectorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const director = await Director.findById(id);
    return res.status(200).json(director);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const postDirector = async (req, res, next) => {
  try {
    const newDirector = new Director({
      ...req.body,
      img: req.file ? req.file.path : undefined
    });
    const existingDirector = await Director.findOne({ name: newDirector.name, age: newDirector.age });
    if (existingDirector) {
      return res.status(400).json("Director already exists");
    }
    const directorSaved = await newDirector.save();
    return res.status(201).json(directorSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    if (req.file) updateData.img = req.file.path;
    const directorUpdated = await Director.findByIdAndUpdate(id, updateData, { new: true });
    return res.status(200).json(directorUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const directorDeleted = await Director.findByIdAndDelete(id);

    deleteFile(directorDeleted.img);

    return res.status(200).json({
      message: "Director deleted successfully",
      director: directorDeleted
    });
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  getDirectors,
  getDirectorById,
  postDirector,
  updateDirector,
  deleteDirector
};