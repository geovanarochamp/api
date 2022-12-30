exports.up = knex => knex.schema.createTable("restaurants", table => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("description")
    table.text("profile_image")
    table.text("cover_image")

});

exports.down = knex => knex.schema.dropTable("restaurants");