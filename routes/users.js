const express = require('express');
const { getAllUsers, getUser } = require('../controllers/controllersUsers');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUser);

module.exports = userRouter;
