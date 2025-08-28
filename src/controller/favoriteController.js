const asyncHandler = require("express-async-handler");
const favoriteModel = require("../model/favoriteModel");
const userModel = require("../model/userModel");
const { use } = require("passport");

const addFavorite = asyncHandler(async (req, res) => {
  const { byUser, byProduct } = req.body;
  const favorite = new favoriteModel({
    byUser: byUser,
    byProduct: byProduct,
  });
  //Check Favorite
  const exists = await favoriteModel.findOne({
    byUser: byUser,
    byProduct: byProduct,
  });
  if (exists) {
    return res.json({ message: "Already favorited" });
  }
  // Create new favorite
  const result = await favorite.save();
  return res.json({ message: "Added to favorites", date: result });
});

const getFavoriteByUser = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  // Get favorites with product details (join/lookup handled by ORM)
  const favorites = await favoriteModel.findById({ byUser: id });
  if(!favorites){
    return res.json({ message: "No no" });
  }
  return res.json(favorites);
});

module.exports = { addFavorite, getFavoriteByUser };
