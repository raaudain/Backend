const db = require("../../db-config");

// Retrieves list of usernames
function getUsers(){
    return db("users")
        .select("username")
        .orderBy("username");
}

// Adds user to database
function addUser(user){
    return db("users")
        .insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return findUser(id);
        });
}

// Retrieves user with id
function findUser(id){
    return db("users")
        .where({id})
        .first();
}

module.exports = {
    getUsers,
    addUser,
    findUser,
}