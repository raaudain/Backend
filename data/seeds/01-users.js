exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users").truncate()
    .then(function () {

      let num = 1;
      
      return knex("Users").insert([
        {id: num++, username: "test", password: "test", email: "test@test.com", profile_img: "https://github.com/Build-Week-AfricanMarketplace/Backend/blob/master/data/img/Profile_picture.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: ""},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`},
        {id: num++, username: "Math.random()", password: "pass", email: `${Math.random()}@example.com`},
      ]);
    });
};
