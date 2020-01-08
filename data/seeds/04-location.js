
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Location").truncate()
    .then(function () {
      // Inserts seed entries
      let num = 1;

      return knex("Location").insert([
        {id: num++, country: "Nigeria", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Ethiopia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Democratic Republic of the Congo", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Tanzania", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "South Africa", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Kenya", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Uganda", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Algeria", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Sudan", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Morocco", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Angola", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Mozambique", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Ghana", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Madagascar", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Cameroon", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Côte d'Ivoire", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Niger", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Burkina Faso", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Mali", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Malawi", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Zambia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Senegal", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Chad", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Somalia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Zimbabwe", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Guinea", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Rwanda", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Benin", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Burundi", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Tunisia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "South Sudan", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Togo", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Sierra Leone", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Libya", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Congo", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Liberia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Central African Republic", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Mauritania", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Eritrea", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Namibia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Gambia", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Botswana", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Gabon", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Lesotho", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Guinea-Bissau", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Equatorial Guinea", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Mauritius", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Eswatini", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Djibouti", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Comoros", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Cabo Verde", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Sao Tome & Principe", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Seychelles", cat_id: Math.floor(Math.random()*41)+1},
        {id: num++, country: "Egypt", cat_id: Math.floor(Math.random()*41)+1}
      ]);
    });
};
