let http = require("http"); //access to HTTP module (to create server)
// let dt = require("./myfirstmodule");
let fs = require("fs");

http
  .createServer(function(req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("main.html", function(err, data) {
      res.writeHead(200, { "content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    //* Homepage
    // if (req.url == "/") {
    //   res.write(`Hello, and Welcome to our Homepage ${dt.myDateTime()}`);
    //   res.end();
    // }
    //* About
    // if (req.url == "/about") {
    //   res.end("About Page");
    // }
  })
  .listen(3000);
