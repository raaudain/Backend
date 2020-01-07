const router = require("express").Router();

const Location = require("./loc-model");
const Items = require("../items/items-model");


router.get("/", (req, res) => {
    Location
        .getCtries()
        .then(country => {
            res.status(200).json(country);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;

    Location
        .getCtry(id)
        .then(country => {
            res.status(200).json(country);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Display items for country
router.get("/:id/items", 
//validate.validateUserId, 
(req, res) => {
    const {id} = req.params;

    Items
        .getItemsCtry(id)
        .then(ctry => {
            res.status(200).json(ctry);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// Displays the average price for all items for a specific country
router.get("/:id/items/avg", (req, res) => {
    const {id} = req.params;

    Items
        .getItemsCtry(id)
        .then(ctry => {
            const price = [];
            ctry.forEach(i => price.push(i.item_price));

            const total = price.reduce((acc, sum) => acc+=sum, 0);
            const avg = total/price.length;

            res.status(200).json({average_price: avg});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `${err}`});
        });
});

// 
router.get("/:id/items/:id/avg", (req, res) => {
    const {id} = req.params;

    Items
        .getAvg4ItemCtry(id)
        .then(() => {
            return Items
                .getAvg4ItemCtry(id)
                .then(item => {
                    
                    const price = [];
                    item.forEach(i => price.push(i.item_price))

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

router.get("/:id/category/:id/items/avg", (req, res) => {
    const {id} = req.params;

    Location
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


module.exports = router;