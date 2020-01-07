const db = require("../../db-config");

// Retrieves list of usernames
function getUsers(){
    return db("users")
        .select("id", "username")
        .orderBy("username");
}

// Retrieves user with id
function getUser(id){
    return db("users")
        .select("username")
        .where({id})
        .first();
}

// Adds user to database
function addUser(user){
    return db("users")
        .insert(user, "id")
        .then(ids => {
            console.log(user)
            const [id] = ids;
            return db("users")             
                .where({id})
                .first();
        });
}

// Retrieves user with username
function findUser(user){
    return db("users")
        .where(user)
}

function updateUser(id, changes){
    return db("users")
        .where({id})
        .update(changes);
}

function removeUser(id){
    return db("users")
        .where("id", id)
        .del();
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    findUser,
    updateUser,
    removeUser
}
