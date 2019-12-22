
exports.up = function(knex) {
    return knex.schema
        .createTable("Users", table => {
            table.increments();

            table.string("username", 255)
                .notNullable()
                .unique();
            
            table.string("password", 255)
                .notNullable()
            
            table.string("email", 255)
                .notNullable()
                .unique();

            table.string("last_name", 255)

            table.string("first_name", 255)

            table.string("company_name", 255)

            table.string("address", 255)

            table.string("")
        })
        .createTable("Items", table => {
            table.increments();

            table.string("item_name", 255).notNullable()
            
            table.string("item_description", 255).notNullable()
            
            table.float("item_price").notNullable()

            table.string("market_location", 255).notNullable()

            table.integer("uid")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Items")
        .dropTableIfExists("Users")
};
