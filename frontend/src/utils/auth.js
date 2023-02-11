// const baseUrl = 'https://api.julianrb-around.students.nomoredomainssbs.ru/';
const baseUrl = 'http://localhost:3001/';

const register = function (email, password) {
  return fetch(`${baseUrl}signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 400)
        throw new Error('uno de los campos se rellenó de forma incorrecta ');
      else return res.json();
    })
    .catch((err) => console.error(err));
};

const authorize = function (email, password) {
  return fetch(`${baseUrl}signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Uno de los campos está mal');
      }
      if (res.status === 400) {
        throw new Error('No se ha proporcionado uno o más campos');
      } else {
        return res.json();
      }
    })
    .catch((err) => console.error(err));
};

const checkToken = function (token) {
  return fetch(`${baseUrl}users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 400)
        throw new Error(
          'Token no proporcionado o proporcionado en formato incorrecto'
        );
      if (response.status === 401)
        throw new Error('El token provisto es inválido');
      else return response.json();
    })
    .then((res) => res)
    .catch((err) => console.error(err));
};

export { register, authorize, checkToken };
