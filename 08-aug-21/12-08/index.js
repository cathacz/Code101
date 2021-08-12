/* 
To start new express project
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i lowdb
 npm i nodemon --save-dev
 touch index.js
 json script
 "start": "nodemon index.js"
 */

// express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// lowdb
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileAsync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// json setup old school
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// json cool method > new one!
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb App");
});
// db init
app.get("/new", async (req, res) => {
  await db.defaults({ article: [], user: {}, num: 1 }).write();
  res.send("New db init");
});
// add
app.get("/add", async (req, res) => {
  // url /add?id=1&title=stuff
  const id = req.query.id;
  const title = req.query.title;
  db.get("articles").push({ id: id, title: title }).write();
  res.send(`new data >> id:${id} && title:${title}`);
});
// find
app.get("/find", async (req, res) => {
  // url /find?id=1
  const idToFind = req.query.id;
  res.send(await db.get("/articles").find({ id: idToFind }));
});
// update

// delete

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
