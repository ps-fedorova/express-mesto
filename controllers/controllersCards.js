// Блок управления

const path = require('path');
const { readFile } = require('../helpers/helpers');

const cards = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(cards)
    .then((data) => {
      res
        .status(200)
        .send(JSON.parse(data));
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: `${error}` });
    });
};

module.exports = {
  getCards,
};

// // Блок управления (аналог без helpers.js)

// const cards = require('../data/cards.json');

// const getCards = (req, res) => {
//   res
//     .status(200)
//     .send(cards);
// };

// // const getCards = (req, res) => {
// //   try {
// //     res
// //       .status(200)
// //       .send(car1ds);
// //   } catch (error) { // нужно ли здесь обрабатывать ошибку...?
// //     res
// //       .status(500)
// //       .send({ message: `${error}` });
// //   }
// // };

// module.exports = {
//   getCards,
// };
