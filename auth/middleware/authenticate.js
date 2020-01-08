const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const {authorization} = req.headers;
    
    if(authorization){
        const secret = process.env.JWT_SECRET || "stay secret";

        jwt.verify(authorization, secret, function(err, decodedToken){
            if(err){
                res.status(401).json({message: "Invalid token"});
            }
            else{
                req.token = decodedToken;
                next();
            }
        });
    }
    else{
        res.status(401).json({message: "Token needed"})
    }
};