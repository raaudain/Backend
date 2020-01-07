exports.up = function(knex) {
    return knex.schema
        .createTable("Users", table => {
            table.increments();

            table.string("username", 128)
                .notNullable()
                .unique();
            
            table.string("password", 128)
                .notNullable()
            
            table.string("email", 128)
                .notNullable()
                .unique();

            table.string("last_name", 128);

            table.string("first_name", 128);

            table.string("company_name", 128);

            table.string("street_address", 128);

            table.string("city", 128);

            table.string("country", 128);
        })
        .createTable("Items", table => {
            table.increments();

            table.string("item_name", 128).notNullable();
            
            table.string("item_description", 128).notNullable();
            
            table.float("item_price").notNullable();

            table.integer("u_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");

            table.integer("c_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Category")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");

            table.integer("l_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Location")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("Category", table => {
            table.increments();

            table.string("category", 128).notNullable().unique();
        })
        .createTable("Location", table => {
            table.increments();

            table.string("country", 128).notNullable().unique();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Items")
        .dropTableIfExists("Users")
        .dropTableIfExists("Category")
        .dropTableIfExists("Location");
};
