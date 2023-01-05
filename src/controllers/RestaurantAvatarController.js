const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class RestaurantAvatarController {
    // async update(req, res) {
    //     const restaurant_id = req.restaurant.id
    //     const avatarFilename = req.file.filename

    //     const diskStorage = new DiskStorage()

    //     const restaurant = await knex("restaurants").where({ id: restaurant_id }).first()

    //     if (!restaurant) {
    //         throw new AppError("Somente usuários autenticados podem mudar o avatar.", 401)
    //     }

    //     if (restaurant.profile_image) {
    //         await diskStorage.deleteFile(user.profile_image)
    //     }

    //     const filename = await diskStorage.saveFile(avatarFilename)
    //     user.avatar = filename

    //     await knex("restaurants").update(restaurant).where({ id: restaurant_id })

    //     return response.json(restaurant)
    // }
}

module.exports = RestaurantAvatarController