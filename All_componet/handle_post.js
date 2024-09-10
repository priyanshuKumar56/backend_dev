const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "hi priyanshu";

    // Collect data
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // End of data
    req.on("end", () => {
      res.end("Data received: " + body);
    });
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Send a POST request\n");
  }
});

server.listen(5002, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:5002/");
});
