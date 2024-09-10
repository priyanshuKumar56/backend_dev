// Node.js server with an API that responds with JSON data
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api/data" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const data = {
      message: "Hello, World!",
      success: true,
    };
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(6001, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:6001/");
});
