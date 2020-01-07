
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Category").truncate()
    .then(function () {
      
      let num = 1;
      // Inserts seed entries
      return knex("Category").insert([
        {id: num++, category: "Animal Products"},
        {id: num++, category: "Livestock"},
        {id: num++, category: "Poultry"},
        {id: num++, category: "Beans"},
        {id: num++, category: "Maize"},
        {id: num++, category: "Barley"},
        {id: num++, category: "Millet"},
        {id: num++, category: "Sorghum"},
        {id: num++, category: "Wheat"},
        {id: num++, category: "Rice"},
        {id: num++, category: "Avocado"},
        {id: num++, category: "Bananas"},
        {id: num++, category: "Fruits"},
        {id: num++, category: "Lemons"},
        {id: num++, category: "Limes"},
        {id: num++, category: "Mangoes"},
        {id: num++, category: "Oragnes"},
        {id: num++, category: "Pawpaw"},
        {id: num++, category: "Pineapples"},
        {id: num++, category: "Coffee"},
        {id: num++, category: "Cotton"},
        {id: num++, category: "Tea"},
        {id: num++, category: "Tobacco"},
        {id: num++, category: "Vanilla"},
        {id: num++, category: "Peas"},
        {id: num++, category: "Cassava"},
        {id: num++, category: "Potatoes"},
        {id: num++, category: "Nuts"},
        {id: num++, category: "Simsim"},
        {id: num++, category: "Sunflowers"},
        {id: num++, category: "Brinjals"},
        {id: num++, category: "Cabbages"},
        {id: num++, category: "Capsicums"},
        {id: num++, category: "Carrots"},
        {id: num++, category: "Cauliflower"},
        {id: num++, category: "Chillies"},
        {id: num++, category: "Cucumber"},
        {id: num++, category: "Ginger"},
        {id: num++, category: "Kales"},
        {id: num++, category: "Lettuce"},
        {id: num++, category: "Onions"},
        {id: num++, category: "Tomatoes"}
      ]);
    });
};
