const router = require("express").Router();

const Categories = require("./cat-model");
const Items = require("../items/items-model");

router.get("/", (req, res) => {
    Categories
        .getCats()
        .then(cat => {
            res.status(200).json(cat);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;

    Categories
        .getCat(id)
        .then(cat => {
            res.status(200).json(cat);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Display items for category
router.get("/:id/items", 
//validate.validateUserId, 
(req, res) => {
    const {id} = req.params;

    Items
        .getItemsCat(id)
        .then(cat => {
            res.status(200).json(cat);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

module.exports = router;