const fs = require("fs");
const http = require("http");
const url = require("url");
const data = fs.readFileSync(
  `${__dirname}/veggies.json`,
  "utf-8",
  (err, data) => {}
);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    res.end("ExpressJS RULEZ!!!");
  } else if (pathName === "/away") {
    res.end("nodeJS RULEZ!!!");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1 style='color:pink;'>Page not found</h1>");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to requests on port 4000");
});
