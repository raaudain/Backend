const db = require("../../db-config");

function getItems(userId){
    return db("users as u")
        .select("i.id", "i.item_name", "i.item_description", "i.item_price")
        .join("items as i", "u.id", "i.uid")
        .where("u.id", userId)
}

function getItem(id){
    return db("items")
        .select("item_name", "item_description", "item_price")
        .where({id})
        .first();
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
        .update(changes)

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
    removeItem
}