const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3002;

const server = express();

server.use(
  cors({
    methods: "GET",
  })
);

server.use(express.static(path.join(__dirname, "dist")));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
