const { Router } = require("express");

const RestaurantsController = require("../controllers/RestaurantsController")

const restaurantsRoutes = Router();

const restaurantsController = new RestaurantsController()


restaurantsRoutes.post("/", restaurantsController.create)
restaurantsRoutes.get("/", restaurantsController.index)
restaurantsRoutes.get("/:restaurant_name", restaurantsController.search)

module.exports = restaurantsRoutes