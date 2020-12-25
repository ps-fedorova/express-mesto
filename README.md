# Проект Mesto бэкенд

## Технологии
   
   * Node.js
   * Express.js
   * Postman
   * MongoDB

## Запуск проекта

Для работы с проектом вам понадобятся git, NodeJS, MongoDB, Postman. Установить программное обеспечение можно по следующим ссылкам:

* [Скачать git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Скачать NodeJS](https://nodejs.org/en/download/package-manager/)
* [Скачать MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
* [Скачать Postman](https://www.postman.com/downloads/)

## Локальная установка

1. git clone https://github.com/ps-fedorova/news-explorer-api.git
2. cd news-explorer-api
3. npm i

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

Локальный сервер доступен по адресу http://localhost:3000.

## Роуты

`GET /users` — возвращает всех пользователей   
`GET /users/:userId` - возвращает пользователя по _id   
`POST /users` — создаёт пользователя   
`PATCH /users/me` — обновляет профиль   
`PATCH /users/me/avatar` — обновляет аватар   

`GET /cards` — возвращает все карточки   
`POST /cards` — создаёт карточку   
`DELETE /cards/:cardId` — удаляет карточку по идентификатору   
`PUT /cards/:cardId/likes` — поставить лайк карточке   
`DELETE /cards/:cardId/likes` — убрать лайк с карточки   
