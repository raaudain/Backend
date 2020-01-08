const db = require("../../db-config");

function getCats(){
    return db("category")
        .orderBy("category");
}

function getCat(id){
    return db("category")
        .select("category")
        .where({id})
        .first();
}

function getCatLoc(id){
    return db("category")
        .select("*")
        .join("location", "category.id", "location.cat_id")
        .where("location.cat_id", id)
}

function getCatLocAvg(id){
    return db("category")
        .select("*")
        .join("location", "category.id", "location.cat_id")
        .join("items", "location.id", "items.c_id")
        .where("location.id", id)
}

module.exports = {
    getCats,
    getCat,
    getCatLoc,
    getCatLocAvg
}