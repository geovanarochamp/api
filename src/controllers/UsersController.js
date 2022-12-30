const { hash, compare } = require("bcryptjs")

const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")
const { response } = require("express")

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExists) {
            throw new AppError('Este email já está em uso.')
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return res.status(201).json()
    }

    async update(req, res) {
        const { name, email, password, old_password } = req.body
        const { id } = req.params

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

        if (!user) {
            throw new AppError('Não encontramos o usuário.')
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError('Email já está em uso.')
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if (password && !old_password) {
            throw new AppError('Você precisa informar a senha antiga para definir a nova senha.')
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) {
                throw new AppError('Senha antiga não cofere.')
            }

            user.password = await hash(password, 8)

        }

        await database.run(`
            UPDATE users SET
                name = ?,
                email = ?,
                password = ?
                WHERE id = ?`,
            [user.name, user.email, user.password, id])

        return res.json()
    }
}

module.exports = UsersController;
