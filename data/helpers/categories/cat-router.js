const router = require("express").Router();

const Categories = require("./cat-model");
const Items = require("../items/items-model");
const Location = require("../location/loc-model")

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

// Returns the average of an item's price based on location
router.get("/:id/location/:id/items/avg", (req, res) => {
    const {id} = req.params;

    Categories
        .getCtry(id)
        .then(() => {
            return Location
                .getAvg(id)
                .then(i => {   
                    const price = [];
                    i.forEach(e => price.push(e.item_price));

                    const total = price.reduce((acc, sum) => acc+=sum, 0);
                    const avg = total/price.length;

                    res.status(200).json(avg);
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Displays countries offering a specific category
router.get("/:id/location", (req, res) => {
    const {id} = req.params;

    Categories
        .getCatLoc(id)
        .then(i => {
            res.status(200).json(i)
        })
});

// Displays items based on category and location
router.get("/location/:id", (req, res) => {
    const {id} = req.params;

    Categories
        .getCatLoc(id)
        .then(() => {
            return Categories
                .getCatLocAvg(id)
                .then(i => {
                    res.status(200).json(i);
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Returns the average of an item's price based on location
router.get("/location/:id/avg", (req, res) => {
    const {id} = req.params;

    Categories
        .getCatLoc(id)
        .then(() => {
            return Categories
                .getCatLocAvg(id)
                .then(i => {
                    const price = [];
                    i.forEach(e => price.push(e.item_price));

                    const total = price.reduce((acc, sum) => acc+=sum, 0);
                    const avg = total/price.length;

                    res.status(200).json(avg);
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});


module.exports = router;