// const fs = require("fs");

// fs.writeFile("./test.txt", "hey there i am priyanshu", (err) =>
//   console.warn("eror")
// );
// fs.readFile("./contect.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log(result);
// fs.appendFileSync("./test.txt", `hey ther\n`);

// console.log(fs.statSync("./test.txt"));

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(5001, () => {
  console.log("Server running at http://127.0.0.1:5001/");
});
