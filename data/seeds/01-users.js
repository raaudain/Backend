exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users").truncate()
    .then(function () {
      return knex("Users").insert([
        {id: 1, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 2, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 3, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 4, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 5, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 6, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 7, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 8, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 9, username: Math.random(), password: "pass", email: "sample@example.com"},
        {id: 10, username: Math.random(), password: "pass", email: "sample@example.com"},
      ]);
    });
};
