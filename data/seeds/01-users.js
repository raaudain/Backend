exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users").truncate()
    .then(function () {

      let num = 1;
      
      return knex("Users").insert([
        {id: num++, username: "test", password: "test", email: "test@test.com", profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
        {id: num++, username: Math.random(), password: "pass", email: `${Math.random()}@example.com`, profile_img: "https://www.clker.com/cliparts/3/c/9/0/15346636991003506792default_user.med.png"},
      ]);
    });
};
