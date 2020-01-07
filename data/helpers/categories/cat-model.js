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


module.exports = {
    getCats,
    getCat,
    getCatLoc
}