const express = require("express");
const myServer = express();

myServer.listen(8000, () => console.log("running & listening"));

myServer.get("/", (request, response) =>
  response.send("Warme Kacke dampft im Schnee")
);
myServer.get("/tetris", (request, response) => response.send("no more games"));
