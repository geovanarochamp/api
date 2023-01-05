exports.up = knex => knex.schema.createTable("restaurants", table => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("description")
    table.text("profile_image")
    table.float("rate")
    table.text("delivery_time")
    table.float("delivery_fee")

});

exports.down = knex => knex.schema.dropTable("restaurants");