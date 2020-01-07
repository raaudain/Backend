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

module.exports = {
    getCats,
    getCat
}