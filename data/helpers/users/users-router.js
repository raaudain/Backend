const router = require("express").Router();

const Users = require("./users-model");
const authenticate = require("../../../auth/middleware/authenticate");

// Displays users
router.get("/", (req, res) => {
    Users
        .getUsers()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Displays specific user with id
router.get("/:id", (req, res) => {
    const {id} = req.params;

    Users  
        .getUser(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

// Adds user
// router.post("/", (req, res) => {
//     const add = req.body;

//     Users 
//         .addUser(add)
//         .then(newUser => {
//             res.status(201).json(newUser)
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({message: `${err}`});
//         });
// });

// Updates user info
router.put("/:id", authenticate, (req, res) => {
    const {id} = req.params;
    const change = req.body;
    console.log(change)
    Users
        .getUser(id)
        .then(() => {
            return Users
                .updateUser(id, change)
                .then(() => {
                    res.status(200).json({message: "User data updated."});
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Deletes user
router.delete("/:id", authenticate, (req, res) => {
    const {id} = req.params;

    Users
        .removeUser(id)
        .then(user => {
            res.status(200).json({message: "User removed."});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

module.exports = router;