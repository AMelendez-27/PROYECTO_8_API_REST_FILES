const deleteFile = require('../../utils/deleteFile');
const Film = require('../models/film');

const getFilms = async (req, res, next) => {
  try {
    const films = await Film.find().populate('director');
    return res.status(200).json(films);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const getFilmById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findById(id).populate('director');
    if (!film) return res.status(404).json("Film not found");
    return res.status(200).json(film);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const postFilm = async (req, res, next) => {
  try {
    const newFilm = new Film(req.body);
    if (req.file) {
      newFilm.img = req.file.path;
    }
    const existingFilm = await Film.findOne({ name: newFilm.name, director: newFilm.director });
    if (existingFilm) {
      return res.status(400).json("Film already exists");
    }
    const filmSaved = await newFilm.save();
    // Populate director before returning
    const filmPopulated = await Film.findById(filmSaved._id).populate('director');
    return res.status(201).json(filmPopulated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filmUpdated = await Film.findByIdAndUpdate(id, req.body, { new: true }).populate('director');
    return res.status(200).json(filmUpdated);
  } catch (error) {
    return res.status(400).json("error");
  }
};

const deleteFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filmDeleted = await Film.findByIdAndDelete(id);

    deleteFile(filmDeleted.img);

    return res.status(200).json({message: "Film deleted successfully"});
  } catch (error) {
    return res.status(400).json("error");
  }
};

module.exports = {
  getFilms,
  getFilmById,
  postFilm,
  updateFilm,
  deleteFilm
};