// Здесь только настройки сервера

const express = require('express');

const app = express();
const path = require('path');
const { userRouter, cardsRouter } = require('./routes/exports');

const { PORT = 3000 } = process.env; // const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); // отдать статичные данные из папки "public"

app.use('/users', userRouter); // отдать пути
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res
    .status(404)
    .send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
