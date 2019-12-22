const express = require("express");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({message: "It's working"});
});

server.use("/api/auth", authRouter);

module.exports = server;