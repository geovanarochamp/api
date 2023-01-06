const { Router } = require("express")

const usersRouter = require("./users.routes")
const restaurantsRouter = require("./restaurants.routes")
const menuRouter = require("./menu.routes")
const sessionsRouter = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/restaurants", restaurantsRouter)
routes.use("/restaurantmenu", menuRouter)

module.exports = routes