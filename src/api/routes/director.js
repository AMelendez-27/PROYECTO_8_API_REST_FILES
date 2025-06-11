const { getDirectors, getDirectorById, postDirector, updateDirector, deleteDirector } = require('../controllers/director');
const { upload } = require('../../middlewares/file');

const directorRouter = require('express').Router();
directorRouter.get('/', getDirectors);
directorRouter.get('/:id', getDirectorById);
directorRouter.post('/', upload.single('img'), postDirector);
directorRouter.put('/:id', upload.single('img'), updateDirector);
directorRouter.delete('/:id', deleteDirector);

module.exports = directorRouter;