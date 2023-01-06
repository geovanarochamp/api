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
            price,
            restaurant_id
        })

        return res.json()
    }

    async index(req, res) {
        const { restaurant_id } = req.params

        const restaurant = await knex("restaurants").where({ id: restaurant_id })
        const menu = await knex("menu").where({ restaurant_id: restaurant_id }).orderBy("type")
        const types = await knex.select('type').from('menu').where({ restaurant_id: restaurant_id })
        return res.json({ restaurant: restaurant, menu, types })
    }
}

module.exports = MenuController
