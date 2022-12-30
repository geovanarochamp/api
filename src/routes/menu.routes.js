const { Router } = require("express");

const MenuController = require("../controllers/MenuController")

const menuRoutes = Router();

const menuController = new MenuController()


menuRoutes.post("/:restaurant_id", menuController.create)
menuRoutes.get("/:restaurant_id", menuController.show)

module.exports = menuRoutes