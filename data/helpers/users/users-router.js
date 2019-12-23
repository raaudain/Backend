const router = require("express").Router();

const Users = require("./users-model");

// **** FOR USERS ****
// Displays users
router.get("/", (req, res) => {
    Users
        .getUsers()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

// Displays specific user with id
router.get("/:id", (req, res) => {
    const {id} = req.params;

    Users  
        .findUser(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

// Adds user
router.post("/", (req, res) => {
    const add = req.body;

    Users 
        .addUser(add)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});