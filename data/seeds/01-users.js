exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users").truncate()
    .then(function () {

      let num = 1;
      
      return knex("Users").insert([
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
      ]);
    });
};
