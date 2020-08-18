// Блок управления

const path = require('path');
const { readFile } = require('../helpers/helpers');

const users = path.join(__dirname, '..', 'data', 'users.json');

const getAllUsers = (req, res) => {
  readFile(users)
    .then((data) => res
      .status(200)
      .send(JSON.parse(data)))
    .catch((error) => res
      .status(500)
      .send({ message: `${error}` }));
};

const getUser = (req, res) => {
  readFile(users)
    .then((data) => {
      const currentUser = JSON.parse((data)).find((user) => user._id === req.params.id);
      if (!currentUser) { // найти текущего пользователя
        res
          .status(404)
          .send({ message: 'Нет пользователя с таким id' });
      }
      res
        .status(200)
        .send(currentUser);
    })
    .catch((error) => res
      .status(500)
      .send({ message: `${error}` }));
};

module.exports = {
  getAllUsers,
  getUser,
};

// // Блок управления (аналог без helpers.js)

// const users = require('../data/users.json');

// const getAllUsers = (req, res) => {
//   res
//     .status(200)
//     .send(users);
// };

// const getUser = (req, res) => {
//   const currentUser = users.find((user) => user._id === req.params.id);
//   if (!currentUser) { // найти текущего пользователя
//     res
//       .status(404)
//       .send({ message: 'Нет пользователя с таким id' });
//   }
//   res
//     .status(200)
//     .send(currentUser);
// };

// module.exports = {
//   getAllUsers,
//   getUser,
// };
