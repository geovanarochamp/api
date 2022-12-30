const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersController = new UsersController()

const usersRoutes = Router();


function myMiddleware(req, res, next) { 
    console.log("Você passou pelo MIDDLEWARE!")
    next()
}


usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes