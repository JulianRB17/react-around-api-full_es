const cardsRoute = require('express').Router();
const { celebrate, Joi, Segments, errors } = require('celebrate');
const validator = require('validator');
const {
  getCards,
  deleteCard,
  createCard,
  likeCard,
  unlikeCard,
} = require('../controllers/cards');

const urlValidator = function (value, helpers) {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
};

cardsRoute.get('/', getCards);
cardsRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      link: Joi.string().required().custom(urlValidator),
      name: Joi.string().required(),
    }),
  }),
  createCard
);
cardsRoute.delete('/:cardId', deleteCard);
cardsRoute.put('/likes/:cardId', likeCard);
cardsRoute.delete('/likes/:cardId', unlikeCard);
cardsRoute.use(errors());

module.exports = { cardsRoute };
