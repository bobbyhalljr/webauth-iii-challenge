const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../users/authRouter");
const userRouter = require("../users/userRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;