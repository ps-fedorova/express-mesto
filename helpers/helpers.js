const fs = require('fs').promises;

const readFile = (file) => fs.readFile(file); // прочитать файл в асинхронном режиме

module.exports = {
  readFile,
};

// пути, так пути
