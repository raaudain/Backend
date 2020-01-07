const router = require("express").Router();

const Items = require("./items-model");
const authenticate = require("../../../auth/middleware/authenticate");
const validate = require("../middleware/validate");

// Display items for user
router.get("/:id/items", 
//validate.validateUserId, 
(req, res) => {
    const {id} = req.params;

    Items
        .getItems(id)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Moved display category items function to cat-router.js in categories folder

// Moved display country items to loc-router.js in location folder

// Display specific item for specific user with ids
router.get("/:id/items/:id", 
//validate.validateUserId, 
//validate.validateItemId, 
(req, res) => {
    const {id} = req.params;

    Items
        .getItems(id)
        .then(() => {
            return Items
                .getItem(id)
                .then(item => {
                    res.status(200).json(item);
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Adds new item
router.post("/:id/items", 
authenticate, 
//validate.validateUserId, 
(req, res) => {
    const {id} = req.params;
    const item = req.body;

    Items
        .findUser(id)
        .then(() => {
            return Items
                .addItem({
                    u_id: id,
                    item_name: item.item_name,
                    item_description: item.item_description,
                    item_price: item.item_price,
                    c_id: item.c_id,
                    l_id: item.l_id
                })
                .then(() => {
                    res.status(201).json(item);
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Updates item info
router.put("/:id/items/:id", 
authenticate, 
//validate.validateUserId, 
//validate.validateItemId, 
(req, res) => {
    const {id} = req.params
    const change = req.body;

    Items
        .getItems(id)
        .then(() => {
            return Items
                .getItem(id)
                .then(() => {
                    return Items
                        .updateItem(id, change)
                        .then(() => {
                            res.status(200).json({message: "Item data updated."})
                        });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Deletes item
router.delete("/:id/items/:id", 
authenticate, 
//validate.validateItemId, 
//validate.validateUserId, 
(req, res) => {
    const {id} = req.params;

    Items
        .getItems(id)
        .then(() => {
            return Items
                .removeItem(id)
                .then(() => {
                    res.status(200).json({message: "Item removed."});
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

module.exports = router;