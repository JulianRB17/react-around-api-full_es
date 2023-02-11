const mongoose = require('mongoose');
const Card = require('../models/card');

const error404 = function (err) {
  err.status = 404;
  err.message = 'Tarjeta no encontrada';
};
const error400 = function (err) {
  err.status = 404;
  err.message = 'Se pasaron datos inválidos';
};
const error401 = function (err) {
  err.status = 401;
  err.message = 'Usuario no válido';
};

const getCards = function (req, res, next) {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch((err) => {
      next(err);
    });
};

const deleteCard = function (req, res, next) {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) throw new Error('Tarjeta no encontrada');
      if (!card.owner.equals(req.user._id))
        throw new Error('Usuario no válido');
      else {
        return card;
      }
    })
    .then((card) => Card.findOneAndRemove(card))
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        error404(err);
      }
      if (err.message === 'Tarjeta no encontrada') {
        error404(err);
      }
      if (err.message === 'Usuario no válido') {
        error401(err);
      }
      next(err);
    });
};

const createCard = function (req, res, next) {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => {
      res.send({ card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        error400(err);
      }
      next(err);
    });
};

const likeCard = function (req, res, next) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        error404(err);
      }
      next(err);
    });
};

const unlikeCard = function (req, res, next) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        error404(err);
      }
      next(err);
    });
};

module.exports = { getCards, deleteCard, createCard, likeCard, unlikeCard };
