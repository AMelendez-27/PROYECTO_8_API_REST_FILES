# PROJECT 8: API REST Files
## _thePower - Full Stack Development_

## Description
This is one of the latest projects I completed to obtain the backend developer certification. The goal was to apply everything I had learned about uploading, transforming, and deleting files in a cloud environment — in this case, Cloudinary. For the database, I used MongoDB, as in previous projects.

---

## Project Requirements
- Server with express  
- Connection to a Mongo Atlas database using mongoose  
- Creation of two models, both with a field that allows us to store a file  
- A seed to upload data to one of the collections  
- A relationship between collections  
- Full CRUD for all collections  
- README with project documentation, listing the endpoints and what each one does  
- File uploads via Cloudinary to both collections  
- File deletion in Cloudinary when the entry is removed from the DB  
- Attempt to reuse Cloudinary storage by changing the folder (may be commented out)  
---

## Tech
- Node.js
- Express
- Mongoose
- MongoDB Atlas
- DotEnv
- Multer
- Cloudinary
- multer-storage-cloudinary
- Nodemon
---

## Installation
This project requires [Node.js](https://nodejs.org/) v20.10+ to run.

Install the dependencies and run the server:

```sh
cd PROYECTO_8_API_REST_FILES
npm install
npm run dev
```

Create a `.env` file in the root with your MongoDB and Cloudinary credentials:
```
DB_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
---

## Endpoints
### _DIRECTORS_
| Method | Route                    | Description                  | Body/Params Example                                 |
|--------|--------------------------|------------------------------|-----------------------------------------------------|
| POST   | `/api/v1/directors`      | Create director (with image) | name, age, img (file)                               |
| GET    | `/api/v1/directors`      | List all directors           | -                                                   |
| GET    | `/api/v1/directors/:id`  | Get director by ID           | :id                                                 |
| PUT    | `/api/v1/directors/:id`  | Update director              | :id + name, age, img (file)                         |
| DELETE | `/api/v1/directors/:id`  | Delete director              | :id                                                 |

### _FILMS_
| Method | Route                 | Description                        | Body/Params Example                                 |
|--------|-----------------------|------------------------------------|-----------------------------------------------------|
| POST   | `/api/v1/films`       | Create film (with image)           | name, genere, duration, director (id), img (file)   |
| GET    | `/api/v1/films`       | List all films                     | -                                                   |
| GET    | `/api/v1/films/:id`   | Get film by ID                     | :id                                                 |
| PUT    | `/api/v1/films/:id`   | Update film                        | :id + name, genere, duration, director, img (file)  |
| DELETE | `/api/v1/films/:id`   | Delete film                        | :id                                                 |
---

## Notes
- To upload images, use `multipart/form-data` and the field `img` in your POST/PUT requests.
- The project includes a commented example on how to reuse Cloudinary storage by changing the destination folder.
- The seeds to populate the database are located in `/src/utils/seeds/`.

---
---
---
