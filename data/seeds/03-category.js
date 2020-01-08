
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Category").truncate()
    .then(function () {
      
      let num = 1;
      // Inserts seed entries
      return knex("Category").insert([
        {id: num++, category: "Animal Products", imgUrl: "https://cdn2.collective-evolution.com/assets/uploads/2011/12/Meat58.jpg", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Livestock", imgUrl: "https://images.unsplash.com/photo-1486579735245-63fbd086823e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1279&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Poultry", imgUrl: "https://images.unsplash.com/photo-1549573308-806b7492063e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Beans", imgUrl: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Maize", imgUrl: "https://images.unsplash.com/photo-1567545819596-0d13019cae95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Barley", imgUrl: "https://images.unsplash.com/photo-1415381850596-1d29bce989f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Millet", imgUrl: "https://cdn11.bigcommerce.com/s-vmvni2zq0j/images/stencil/1280x1280/products/47594/76279/281654__83525.1572622391.jpg?c=2&imbypass=on&imbypass=on", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Sorghum", imgUrl: "https://32lxcujgg9-flywheel.netdna-ssl.com/wp-content/uploads/2016/12/sorghum.jpg", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Wheat", imgUrl: "https://images.unsplash.com/photo-1531816536475-bcd71da1bfc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Rice", imgUrl: "https://images.unsplash.com/photo-1568347355280-d33fdf77d42a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Avocado", imgUrl: "https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Bananas", imgUrl: "https://images.unsplash.com/photo-1513563401345-1123a773541c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1376&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Fruits", imgUrl: "https://images.unsplash.com/photo-1546630392-db5b1f04874a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Lemons", imgUrl: "https://images.unsplash.com/photo-1562599938-e6fe2a67574b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Limes", imgUrl: "https://images.unsplash.com/photo-1527901606534-c62e6f56bb6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Mangoes", imgUrl: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Oranges", imgUrl: "https://images.unsplash.com/photo-1559144716-9438081daf9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Pawpaw", imgUrl: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/5120759642_d8590a5810_b.jpg?itok=rA3j_Dfg", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Pineapples", imgUrl: "https://images.unsplash.com/photo-1525182141-3c82162415f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Coffee", imgUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cotton", imgUrl: "https://images.unsplash.com/photo-1502395809857-fd80069897d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Tea", imgUrl: "https://images.unsplash.com/photo-1546342278-5cceccde4a65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Tobacco", imgUrl: "https://images.unsplash.com/photo-1553433342-956cde1d7646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Vanilla", imgUrl: "https://thepioneerwoman.com/wp-content/uploads/2018/10/how-to-make-vanilla-extract-03.jpg", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Peas", imgUrl: "https://images.unsplash.com/photo-1571079561927-3aeebbd90aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cassava", imgUrl: "https://images.unsplash.com/photo-1524447466422-e1b709b80a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Potatoes", imgUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Nuts", imgUrl: "https://images.unsplash.com/photo-1543208541-0961a29a8c3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Simsim", imgUrl: "https://www.totco.co.ug/images/simsim2.jpg", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Sunflowers", imgUrl: "https://images.unsplash.com/photo-1567008252030-8937e4e3e181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Brinjals", imgUrl: "https://www.awesomecuisine.com/content_images/1/brinjals_eggplant_aubergine.jpg", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cabbages", imgUrl: "https://images.unsplash.com/photo-1573147299528-1c439769b8ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Capsicums", imgUrl: "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Carrots", imgUrl: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1461&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cauliflower", imgUrl: "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Chillies", imgUrl: "https://images.unsplash.com/photo-1489841060824-0f3119e26686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Cucumber", imgUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Ginger", imgUrl: "https://images.unsplash.com/photo-1573414405995-2012861b74e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Kales", imgUrl: "https://images.unsplash.com/photo-1548492212-8cd969151279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Lettuce", imgUrl: "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Onions", imgUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", loc_id: Math.floor(Math.random()*54)+1},
        {id: num++, category: "Tomatoes", imgUrl: "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", loc_id: Math.floor(Math.random()*54)+1}
      ]);
    });
};
