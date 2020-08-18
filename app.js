// Здесь только настройки сервера

const express = require('express');

const app = express();
const path = require('path');
const helmet = require('helmet');

const { userRouter, cardsRouter } = require('./routes/exports');
const { limiter } = require('./middleware/express-rate-limit');

const { PORT = 3000 } = process.env; // const PORT = process.env.PORT || 3000;

app.use(helmet()); // для простановки security-заголовков для API
app.use(limiter); // для ограничения количества запросов (до 100 раз за 15 минут)

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
