const { upload } = require('../../middlewares/file');
const { getFilms, getFilmById, postFilm, updateFilm, deleteFilm } = require('../controllers/film');

const filmRouter = require('express').Router();
filmRouter.get('/', getFilms);
filmRouter.get('/:id', getFilmById);
filmRouter.post('/', upload.single("img"), postFilm);
filmRouter.put('/:id', upload.single("img"), updateFilm);
filmRouter.delete('/:id', deleteFilm);

module.exports = filmRouter;