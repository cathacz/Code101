// server
// https://digitalthinkerhelp.com/what-is-client-server-architecture-diagram-types-examples-components/
// request response cycle
// https://cascadingmedia.com/insites/2015/03/http-2.html
// The Hypertext Transfer Protocol (HTTP)
// HTTP status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 5000;

// root route:
app.get("/", (request, response) => {
  response.send("Hej, I am all the response you will get");
});
// .../about
app.get("/about", (request, response) => {
  response.send("About Section");
});

app.listen(PORT, () => {
  console.log(`Sever is running on port: ${PORT}`);
});
