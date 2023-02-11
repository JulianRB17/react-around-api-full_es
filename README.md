# Around full api

## API creada para el sprint 15 del bootcamp Practicum de Yandex.

Se puede revisar la página en el siguiente [dominio](https://wwww.julianrb-around.students.nomoredomainssbs.ru/).

El frontend de esta API fue desarrollado usando la biblioteca de JavaScript: React, el backend usa Node.js con el framework Express además de MongoDB como base de datos no relacional.

El servidor se encuentra alojado en Google Cloud, éste ocupa NGINX para vincular los puertos y pm2 para mantenerse operando.

## Cómo usar

Para usar la web app se requiere una autorización.

- Sin autorización cualquier endpoint será redirigido a '/signin' donde se puede ingresar con correo y contraseña. El ingreso correcto almacenará un token en el local storage del navegador, éste tendrá una validez de 7 días.

- El link 'Registrarse' lleva al endpoint '/signup' donde se puede registrar con un mail válido y una contraseña.

- Después de ser autorizado, el usuario podrá acceder al endpoint '/', página principal donde tiene la posibilidad de cambiar su nombre de usuario, su descripción, la foto de perfil. Finalmente puede agregar imágenes.

- Estas imágenes pueden ser ampliadas al dar click en ellas, likeadas o, si es el usuario que la generó, eliminadas.

## Frontend endpoints

Se puede acceder a través de https://wwww.julianrb-around.students.nomoredomainssbs.ru/ o https://julianrb-around.students.nomoredomainssbs.ru/

- `/` - Página principal, si no hay usuario loggeado se redirecciona a `/signin`.
  En este endpoint se pueden generar tarjetas, likearlas y eliminar las generadas propias. Además de cambiar nombre, ocupación y foto de perfil del usuario.

- `/signin` Página para registrar un usuario a través de un correo y una contraseña.

- `/signup` Página para ingresar con usuario válido generada en el endpoint

- `/signin`, a partir de la validación de usuario se puede acceder al enpoint `/` con las características principales.

### Running the frontend project

- `npm run start` — Para iniciar el servidor.

- `npm run build` — Para crear el build.

## Backend directories

El backend está alojado en https://api.julianrb-around.students.nomoredomainssbs.ru/

- POST `/users` - toma en el body de request un JSON con un campo "name" que lleva el nombre del usuario y un campo "about" que lleva información de éste, ambos requeridos, de entre 2 y 30 caracteres, para generar un nuevo usuario.

- PATCH `/users/me` - toma en el body de request un JSON con un campo "name" que lleva el nombre del usuario y un campo "about" que lleva información de éste, ambos requeridos, de entre 2 y 30 caracteres, para cambiar el usuario actual.

- GET `/cards` - regresa un JSON con un array con varias cartas.

- POST `/cards` - toma en el body de request un JSON con un campo "name" que lleva el nombre de la tarjeta y un campo "link" que lleva un link a una imagen, ambos requeridos. Con esta data genera una nueva tarjeta.

- DELETE `/cards/:cardId` - elimina una tarjeta a partir de la ID insertada.

- PUT `/cards/:cardId/likes` - agrega el usuario actual a un array de likes dentro de la tarjeta definida por el ID.

- DELETE `/cards/:cardID/likes` - elimina el usuario actual a un array de likes dentro de la tarjeta definida por el ID.

### Running the backend project

El backend está corriendo constantemente gracias a pm2.
Si fuera necesario reiniciarlo se usa: pm2 restar app.

## Tech

Se usan las siguientes tecnologías:

```sh
- HTML - Marcado que da estructura a la página, está dentro del marcado jsx de React.
- CSS - Da estílo a React y a HTML.
- JavaScript - Lenguaje base de React y de todo el proyecto.
- React - Biblioteca de JavaScript para vincularse con el HTML.
- Node.js - Framework de JavaScript que permite la creación del backend.
- Express - Framework de Node.js.
- MongoDB - Base de datos no relacional.
- Mongoose - Vincula a MongoDB con Node.js.
- Git - Sistema de control.
- GoogleCloud - Espacio virtual donde se almacena el servidor.
- NGINX - Proxy inverso para gestionar los puertos del servidor.
- pm2 - Gestionador de procesos que mantiene la app en línea de forma perpetua.
- Ubuntu 20.04 - Sistema operativo en el que está alojado el servidor.
```
