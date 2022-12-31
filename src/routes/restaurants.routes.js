const { Router } = require("express");

const RestaurantsController = require("../controllers/RestaurantsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const restaurantsRoutes = Router();

const restaurantsController = new RestaurantsController()

restaurantsRoutes.use(ensureAuthenticated)

restaurantsRoutes.post("/", restaurantsController.create)
restaurantsRoutes.get("/", restaurantsController.index)
restaurantsRoutes.get("/:restaurant_name", restaurantsController.search)

module.exports = restaurantsRoutes