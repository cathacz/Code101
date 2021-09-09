const express = require("express");
const app = express();
const path = require("path"); // build-in library in node
const morgan = require("morgan");
app.use(morgan("dev"));

const hbs = require("express-handlebars"); // engine library
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
// console.log(__dirname, "views");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
// setups
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const { body, validationResult } = require("express-validator");

// get it started
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "mySecret",
    saveUninitialized: false,
    resave: false,
  })
);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Validation",
    done: false,
    errors: req.session.errors,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About me", data: "Nothing to see here" });
  req.session.errors = null;
});

app.post(
  "/submit",
  //req.body
  body("email", "not valid, dude").isEmail(),
  //next middleware
  body("pass", "not valid, dude").isLength({ min: 8 }),
  body("passConf").custom((value, { req }) => {
    if (value != req.body.pass) {
      throw new Error("Password not the same");
    }
    return true;
  }),
  (req, res) => {
    // req has from data
    // req.body.email
  }
);
module.exports = app;
