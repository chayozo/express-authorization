const express = require("express");
const { addFavorite, getFavoriteByUser } = require("../controller/favoriteController");
const favoriteRouter = express.Router();

favoriteRouter.post('/', addFavorite)
favoriteRouter.get('/:id', getFavoriteByUser)

module.exports = favoriteRouter