const knex = require("../database/knex")

class RestaurantsController {
    async create(req, res) {

        const { name, description, profile_image, cover_image } = req.body

        const restaurant_id = await knex("restaurants").insert({
            name,
            description,
            profile_image,
            cover_image
        })

        return res.json()
    }

    async search(req, res) {
        const { restaurant_name } = req.params

        const restaurant = await knex("restaurants")
            .whereLike("name", `%${restaurant_name}%`)

        return res.json(restaurant)
    }

    async index(req, res) {
        const restaurants = await knex("restaurants")

        return res.json(restaurants)

    }
}

module.exports = RestaurantsController
