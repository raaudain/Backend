
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Category").truncate()
    .then(function () {
      
      let num = 1;
      // Inserts seed entries
      return knex("Category").insert([
        {id: num++, category: "Animal Products", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Livestock", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Poultry", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Beans", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Maize", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Barley", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Millet", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Sorghum", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Wheat", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Rice", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Avocado", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Bananas", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Fruits", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Lemons", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Limes", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Mangoes", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Oragnes", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Pawpaw", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Pineapples", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Coffee", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cotton", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Tea", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Tobacco", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Vanilla", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Peas", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cassava", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Potatoes", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Nuts", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Simsim", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Sunflowers", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Brinjals", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cabbages", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Capsicums", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Carrots", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cauliflower", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Chillies", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cucumber", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Ginger", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Kales", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Lettuce", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Onions", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Tomatoes", loc_id: Math.floor(Math.random()*54)+1}
      ]);
    });
};
