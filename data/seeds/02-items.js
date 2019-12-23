
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "somewhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "everywhere", uid: Math.floor(Math.random()*10)+1},
        {id: Math.floor(Math.random()), item_name: Math.random(), item_description: "test", item_price: 9.99, market_location: "nowhere", uid: Math.floor(Math.random()*10)+1},
      ]);
    });
};
