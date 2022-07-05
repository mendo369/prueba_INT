// let http = require("http");
// let services = require("./services/data");
// const port = 3000

// //crear un objeto de servidor:
// // http
// //   .createServer(function (req, res) {
// //     res.writeHead(200, { "Content-Type": "text/html" }); // encabezado http
// //     var url = req.url;
// //     if (url === "/about") {
// //       res.write(services.getData); //escribe una respuesta
// //       res.end(); //finaliza la respuesta
// //     } else if (url === "/contacto") {
// //       res.write("<h1>página de contacto<h1>"); //escribe una respuesta
// //       res.end(); //finaliza la respuesta
// //     } else {
// //       res.write("<h1>Hello World!<h1>"); //escribe una respuesta
// //       res.end(); // finaliza la respuesta
// //     }
// //   })
// //   .listen(3000);

const http = require("http");
const services = require("./services/data");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("accept", "/");
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch (req.url) {
    case "/stocks":
      res.writeHead(200);
      res.end(services.getData());
      break;

    case "/stocks/agregar/:symbol":
      res.writeHead(200);
      // const parametros = window.location.search;
      // const urlParams = new URLSearchParams(parametros);
      // let symbol = urlParams.get("symbol");
      // let symbol = req.params.symbol;
      //services.agregarStock("sm");
      res.end(`{"message":"${symbol}"}`);
      break;

    case "/stocks/actualizar":
      res.writeHead(200);
      res.end('{"message":"stocks actualizar funcionando"}');
      break;

    case "/stocks/eliminar":
      res.writeHead(200);
      res.end('{"message":"stocks eliminar funcionando"}');
      break;

    default:
      res.writeHead(200);
      res.end('{"message":"page not found"}');
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host);
