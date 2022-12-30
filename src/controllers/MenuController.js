const knex = require("../database/knex")

class MenuController {
    async create(req, res) {

        const { name, description, type, item_image } = req.body
        const { restaurant_id } = req.params

        await knex("menu").insert({
            name,
            description,
            type,
            item_image,
            restaurant_id
        })

        res.json()
    }

    async show(req, res) {
        const { restaurant_id } = req.params

        const restaurant = await knex("restaurants").where({ id: restaurant_id })
        const menu = await knex("menu").where({ restaurant_id: restaurant_id }).orderBy("type")

        return res.json({ ...restaurant, menu })
    }
}

module.exports = MenuController
