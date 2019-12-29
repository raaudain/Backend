const router = require("express").Router();

const Items = require("./items-model");
const authenticate = require("../../../auth/middleware/authenticate");

// Display items for user
router.get("/:id/items", (req, res) => {
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

// Adds new item
router.post("/:id/items", (req, res) => {
    const {id} = req.params;
    const item = req.body;

    Items
        .findUser(id)
        .then(() => {
            return Items
                .addItem({
                    uid: id,
                    item_name: item.item_name,
                    item_description: item.item_description,
                    item_price: item.item_price,
                    market_location: item.market_location
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
router.put("/:id/items/:id", (req, res) => {
    const {id} = req.params
    const change = req.body;

    
})



module.exports = router;