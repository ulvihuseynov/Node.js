const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home");
      break;

    case "/about":
      res.end("About");
      break;
      default :
      res.end('404 -error not found')
  }
});

const Port = 4000;
server.listen(Port, () => {
  console.log("server isledi");
});
