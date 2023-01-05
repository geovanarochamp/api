const { Router } = require("express");
// const multer = require("multer");
// const uploadConfig = require("../configs/upload")

const RestaurantsController = require("../controllers/RestaurantsController")
// const RestaurantAvatarController = require("../controllers/RestaurantAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const restaurantsRoutes = Router();
// const upload = multer(uploadConfig.MULTER)

const restaurantsController = new RestaurantsController()
// const restaurantAvatarController = new RestaurantAvatarController()

restaurantsRoutes.use(ensureAuthenticated)

restaurantsRoutes.post("/", restaurantsController.create)
restaurantsRoutes.get("/", restaurantsController.index)
restaurantsRoutes.get("/:restaurant_name", restaurantsController.search)
// restaurantsRoutes.patch("/avatar", upload.single("avatar"), restaurantAvatarController.update)

module.exports = restaurantsRoutes