var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello, this is my first node js code");
    res.end();
  })
  .listen(8080);
