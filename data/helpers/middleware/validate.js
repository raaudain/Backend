const Users = require("../users/users-model");
const Items = require("../items/items-model");

function validateUserId(req, res, next){
    const {id} = req.params;

    Users
        .getUsers(id)
        .then(user => {
            if(!user){
                res.status(400).json({message: "Invalid user id."})
            }
            else{
                req.action = action;
                next();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

function validateUser(req, res, next){
    const body = req.body;

    if(body && Object.keys(body).length === 0){
        res.status(400).json({message: "Missing user data."});
    }
    else if(body && (!body.notes || !body.description)){
        res.status(400).json({message: "Missing required field."});
    }
    else{
        next();
    }
}