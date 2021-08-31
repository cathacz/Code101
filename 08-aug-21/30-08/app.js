const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");
const faker = require("faker");
const path = require("path"); // gives u exact path
const fakeModel = require("./model/user");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
// console.log(path.resolve(__dirname, "views")); // print out infinite directory
// https://nodejs.org/api/path.html#path_path_resolve_paths
// console.log(faker.animal.dog());

app.get("/", (req, res) => {
  //   res.render("home", { message: "this is a test" });
  fakeModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      // res.render(".home", { data: data });
      res.render("home", { data });
      // when property and value the same just need of one time
    } else {
      res.render(".home", {});
    }
    // render with empty object
  });
});

app.set("view engine", "ejs");
// http://expressjs.com/en/api.html#app.set
app.set("views", path.resolve(__dirname, "views"));
// view = given                         views = I gave

app.post("/", (req, res) => {
  for (let i = 0; i < 10; i++) {
    const fakeData = new fakeModel({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      imageUrl: faker.image.imageUrl(),
    });
    try {
      fakeData.save();
    } catch (err) {
      console.log(err);
    }
  }
  res.redirect("/");
});

module.exports = app;
