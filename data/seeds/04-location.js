
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Location").truncate()
    .then(function () {
      // Inserts seed entries
      let num = 1;

      return knex("Location").insert([
        {id: num++, country: "Nigeria"},
        {id: num++, country: "Ethiopia"},
        {id: num++, country: "Democratic Republic of the Congo"},
        {id: num++, country: "Tanzania"},
        {id: num++, country: "South Africa"},
        {id: num++, country: "Kenya"},
        {id: num++, country: "Uganda"},
        {id: num++, country: "Algeria"},
        {id: num++, country: "Sudan"},
        {id: num++, country: "Morocco"},
        {id: num++, country: "Angola"},
        {id: num++, country: "Mozambique"},
        {id: num++, country: "Ghana"},
        {id: num++, country: "Madagascar"},
        {id: num++, country: "Cameroon"},
        {id: num++, country: "Côte d'Ivoire"},
        {id: num++, country: "Niger"},
        {id: num++, country: "Burkina Faso"},
        {id: num++, country: "Mali"},
        {id: num++, country: "Malawi"},
        {id: num++, country: "Zambia"},
        {id: num++, country: "Senegal"},
        {id: num++, country: "Chad"},
        {id: num++, country: "Somalia"},
        {id: num++, country: "Zimbabwe"},
        {id: num++, country: "Guinea"},
        {id: num++, country: "Rwanda"},
        {id: num++, country: "Benin"},
        {id: num++, country: "Burundi"},
        {id: num++, country: "Tunisia"},
        {id: num++, country: "South Sudan"},
        {id: num++, country: "Togo"},
        {id: num++, country: "Sierra Leone"},
        {id: num++, country: "Libya"},
        {id: num++, country: "Congo"},
        {id: num++, country: "Liberia"},
        {id: num++, country: "Central African Republic"},
        {id: num++, country: "Mauritania"},
        {id: num++, country: "Eritrea"},
        {id: num++, country: "Namibia"},
        {id: num++, country: "Gambia"},
        {id: num++, country: "Botswana"},
        {id: num++, country: "Gabon"},
        {id: num++, country: "Lesotho"},
        {id: num++, country: "Guinea-Bissau"},
        {id: num++, country: "Equatorial Guinea"},
        {id: num++, country: "Mauritius"},
        {id: num++, country: "Eswatini"},
        {id: num++, country: "Djibouti"},
        {id: num++, country: "Comoros"},
        {id: num++, country: "Cabo Verde"},
        {id: num++, country: "Sao Tome & Principe"},
        {id: num++, country: "Seychelles"},
        {id: num++, country: "Egypt"}
      ]);
    });
};
