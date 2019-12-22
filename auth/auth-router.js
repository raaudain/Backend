const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

router.post("/register", (req, res) => {

});

router.post("/login", (req, res) => {

});

// Create token
function signedToken(){
    const payload = {
        subject: user.id,
        username: user.username
    };

    const secret = process.env.JWT_SECRET || "stay secret";

    const options = {
        expiresIn: "1h"
    }

    return jwt.sign(payload, secret, options);
}

module.exports = router;