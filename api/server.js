const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../data/helpers/users/users-router");
const authenticate = require("../auth/middleware/authenticate")

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.status(200).json({message: "It's working"});
});

server.use("/api/auth", authRouter);
server.use("/users", usersRouter, authenticate);

module.exports = server