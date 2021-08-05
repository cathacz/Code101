require("dotenv").config();

const http = require("http");
const PORT = process.env.PORT || 5000;

// console.log(process.env.PORT);

const firstResponse = function (request, response) {
  response.writeHead(200);
  response.end("I am your server for today ;)");
};
const server = http.createServer(firstResponse);
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
