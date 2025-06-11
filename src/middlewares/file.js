const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "API_REST_FILES_PROJECT",
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
})
const upload = multer({ storage });
module.exports = {upload};

// -----------------------------------------------------------------------------------
/*NO ESTOY SEGURO PERO CREO QUE PARA EL REQUISITO DE "Intento de reutilización del storage de cloudinary cambiando la carpeta (puede estar comentado)" ESTO ES LO QUE PIDE*/

/*
const storageDirectors = new CloudinaryStorage({
   cloudinary: cloudinary,
   params: {
     folder: "directors",
     allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
   }
 });
 const storageFilms = new CloudinaryStorage({
   cloudinary: cloudinary,
   params: {
     folder: "films",
     allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
   }
 });
 */
// -----------------------------------------------------------------------------------