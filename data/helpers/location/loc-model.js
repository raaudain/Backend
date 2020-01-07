const db = require("../../db-config");

function getCtries(){
    return db("location")
        .orderBy("country");
}

function getCtry(id){
    return db("location")
        .select("country")
        .where({id})
        .first();
}

function getAvg(id){
    return db("location as loc")
        .select("loc.id as country_id", "loc.country", "cat.id as category_id", "cat.category", "i.id as item_id", "i.item_name", "i.item_price")
        .join("category as cat ", "loc.id", "cat.loc_id")
        .join("items as i", "cat.id",  "i.c_id")
        .where("cat.id", id)
}

module.exports = {
    getCtries,
    getCtry,
    getAvg,
}