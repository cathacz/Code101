const express = require("express");
const myServer = express();

myServer.listen(6666, () => console.log("running & listening"));

myServer.get("/", (request, response) => response.send("number of the beast"));
