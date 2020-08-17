const express = require('express');
const { getCards } = require('../controllers/controllersCards');

const cardsRouter = express.Router();

cardsRouter.get('/', getCards);

module.exports = cardsRouter;
