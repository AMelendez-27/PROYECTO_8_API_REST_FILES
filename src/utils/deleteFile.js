const cloudinary = require('cloudinary').v2;

const deleteFile = (url) => {
  
  const arrayUrl = url.split("/");
  const name = arrayUrl.at(-1).split(".")[0];

  let public_id = `${arrayUrl.at(-2)}/${name}`;
  cloudinary.uploader.destroy(public_id, () => {
    console.log(`Img deleted successfully`);
  }); 
}

module.exports = deleteFile;