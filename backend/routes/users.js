const usersRoute = require('express').Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  updateAvatar,
  login,
} = require('../controllers/users');

usersRoute.get('/', getUsers);
usersRoute.get('/:userId', getUser);
usersRoute.post('/signup', createUser);
usersRoute.patch('/me', updateUser);
usersRoute.patch('/me/avatar', updateAvatar);
usersRoute.post('/signin', login);

module.exports = { usersRoute };
