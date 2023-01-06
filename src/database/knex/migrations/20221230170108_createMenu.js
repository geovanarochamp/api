exports.up = knex => knex.schema.createTable("menu", table => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("description")
    table.text("type").notNullable()
    table.text("item_image")
    table.float("price")
    table.integer("restaurant_id").references("id").inTable("restaurants").onDelete("CASCADE")
});

exports.down = knex => knex.schema.dropTable("menu");