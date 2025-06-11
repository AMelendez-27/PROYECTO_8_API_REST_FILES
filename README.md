# PROYECTO 8: API REST Files & Cloudinary
## _thePower - Desarrollo Full Stack_

## Descripción
Este es un proyecto backend desarrollado con Node.js y Express, que implementa una API RESTful para la gestión de directores y películas. Incluye almacenamiento de imágenes en Cloudinary, subida de archivos con Multer, y conexión a una base de datos MongoDB Atlas usando Mongoose. El objetivo es practicar y demostrar conocimientos en manejo de ficheros, relaciones entre colecciones, middlewares, y servicios externos como Cloudinary.

## Requisitos del Proyecto
- Servidor con Express
- Conexión a MongoDB Atlas usando Mongoose
- Modelos: Director y Film (película)
- Subida de imágenes a Cloudinary (con Multer y multer-storage-cloudinary)
- Seeds para poblar la base de datos
- CRUD completo para directores y películas
- Relación entre películas y directores (cada película tiene un director)
- README con documentación y endpoints
- Ejemplo de reutilización del storage de Cloudinary cambiando la carpeta (comentado en el código)

## Tecnologías
- Node.js
- Express
- Mongoose
- MongoDB Atlas
- DotEnv
- Multer
- Cloudinary
- multer-storage-cloudinary
- Nodemon

## Instalación
Este proyecto requiere [Node.js](https://nodejs.org/) v20.10+ para funcionar.

Instala las dependencias y ejecuta el servidor:

```sh
cd PROYECTO_8_API_REST_FILES
npm install
npm run dev
```

Crea un archivo `.env` en la raíz con tus credenciales de MongoDB y Cloudinary:
```
DB_URL=tu_url_de_mongodb
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

## Endpoints
### _DIRECTORS_
| Método | Ruta                      | Descripción                  | Body/Params Ejemplo                                  |
|--------|---------------------------|------------------------------|------------------------------------------------------|
| POST   | `/api/v1/directors`       | Crear director (con imagen)  | name, age, img (file)                                |
| GET    | `/api/v1/directors`       | Listar todos los directores  | -                                                    |
| GET    | `/api/v1/directors/:id`   | Obtener director por ID      | :id                                                  |
| PUT    | `/api/v1/directors/:id`   | Actualizar director          | :id + name, age, img (file)                          |
| DELETE | `/api/v1/directors/:id`   | Eliminar director            | :id                                                  |

### _FILMS_
| Método | Ruta                  | Descripción                        | Body/Params Ejemplo                                  |
|--------|-----------------------|------------------------------------|------------------------------------------------------|
| POST   | `/api/v1/films`       | Crear película (con imagen)        | name, genere, duration, director (id), img (file)    |
| GET    | `/api/v1/films`       | Listar todas las películas         | -                                                    |
| GET    | `/api/v1/films/:id`   | Obtener película por ID            | :id                                                  |
| PUT    | `/api/v1/films/:id`   | Actualizar película                | :id + name, genere, duration, director, img (file)   |
| DELETE | `/api/v1/films/:id`   | Eliminar película                  | :id                                                  |


## Notas
- Para subir imágenes, usa `multipart/form-data` y el campo `img` en tus peticiones POST/PUT.
- El proyecto incluye un ejemplo comentado de cómo reutilizar el storage de Cloudinary cambiando la carpeta de destino.
- Los seeds para poblar la base de datos están en `/src/utils/seeds/`.

---
---