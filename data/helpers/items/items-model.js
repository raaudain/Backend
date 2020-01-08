const db = require("../../db-config");

function getItems(userId){
    return db("users as u")
        .select("i.id", "i.item_name", "i.item_description", "i.item_price")
        .join("items as i", "u.id", "i.u_id")
        .where("u.id", userId);
}

function getItemsCat(catId){
    return db("category as cat")
        .select("i.id", "i.item_name", "i.item_description", "i.item_price")
        .join("items as i", "cat.id", "i.c_id")
        .where("cat.id", catId);
}

function getItemsCtry(ctryId){
    return db("location as loc")
        .select("i.id", "i.item_name", "i.item_description", "i.item_price")
        .join("items as i", "loc.id", "i.l_id")
        .where("loc.id", ctryId);
}

function getItem(id){
    return db("items")
        .select("item_name", "item_description", "item_price")
        .where({id})
        .first();
}

function getAvg4ItemCtry(id){
    return db("location as loc")
        .select("i.item_price")
        .join("items as i", "loc.id", "i.l_id")
        .where("loc.id", id)
        //.first();
}

function addItem(item){
    return db("items")
        .insert(item)
        .then(ids => {
            const [id] = ids;

            return db("users")
                .where({id})
                .first();
        })
}

function findUser(id){
    return db("users")
        .where({id})
        .first();
}

function updateItem(id, changes){
    return db("items")
        .where("id", id)
        .update(changes);

}

function removeItem(id){
    return db("items")
        .where("id", id)
        .del();
}

module.exports = {
    getItems,
    getItem,
    addItem, 
    findUser, 
    updateItem, 
    removeItem,
    getItemsCat,
    getItemsCtry,
    getAvg4ItemCtry
}