require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(logger);

//middleware >>>  runs before response
// middleware checks stuff like user, password, autofication

function logger(req, res, next) {
  console.log(`Log1`);
  next(); // NOT return > next moves on in function; return determines function
}
app.get("/", (req, res) => {
  //   console.log(req);
  res.send("<h2>Headline #2<h2>");
});

app.get("/about", (req, res) => {
  console.log(req);
  res.send("<h2>People = $hit<h2>");
});

app.get("/user", userLogged, (req, res) => {
  // url /user?name=Catha
  //   console.log(req.query);
  //   const username = req.query.name;
  const username = req.userName;
  res.send(`<h2>USER ${username}<h2>`);
});

function userLogged(req, res, next) {
  if (req.query.username === "Catha") {
    console.log("Log2");
    req.userName = "Catha";
    next();
  } else {
    res.send("Go log in");
  }
}

app.post("/login", (req, res) => {
  console.log(req.body);
  //   res.send("some text");

  const userName = req.body.userName;
  const pass = req.body.pass;
  if (userName === "Catha" && pass === "S0m3th!n6") {
    res.status(200).send(`Hello ${userName}`);
  } else {
    res.status(401).send(`nice try – try again`);
  }
});

app.get("/api", (req, res) => {
  res.status(200).json({ id: 1, cityName: "Leipzig", country: "Germany" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
