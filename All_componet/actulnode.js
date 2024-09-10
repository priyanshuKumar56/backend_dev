// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   if (req.url === "/favicon.ico") return res.end();
//   const now = `${new Date()} :${req.url} new request comme\n`;
//   const myurl = url.parse(req.url, true);
//   console.log(myurl);
//   fs.appendFile("log.txt", now, (err) => {
//     switch (myurl.pathname) {
//       case "/":
//         res.end("Homepage");
//         break;
//       case "/about":
//         const user = myurl.query.name;

//         res.end("About " + user);
//         break;

//       default:
//         res.end("404 notfound");
//         break;
//     }
//   });
// });
// server.listen(5000, () => {
//   console.log("server is running on port 3000");
// });

// // Create an HTTP server
// const server = http.createServer(async (req, res) => {
//   if (req.url === "/favicon.ico") {
//     res.writeHead(204);
//     return res.end();
//   }

//   const myUrl = url.parse(req.url, true);
//   const dataFilePath = path.join(__dirname, "data.json");

//   try {
//     switch (myUrl.pathname) {
//       case "/":
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Homepage");
//         break;

//       case "/about":
//         const userName = myUrl.query.name || "Guest";
//         const timestamp = new Date().toISOString();

//         // Read existing data from the JSON file
//         let jsonData = await readJsonFile(dataFilePath);

//         // Append new data to the array
//         const newData = {
//           id: jsonData.length + 1,
//           name: userName,
//           timestamp: timestamp,
//         };
//         jsonData.push(newData);

//         // Write the updated JSON data back to the file
//         await writeJsonFile(dataFilePath, jsonData);

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(newData));
//         break;

//       default:
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404 Not Found");
//         break;
//     }
//   } catch (error) {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Internal Server Error");
//     console.error("Error processing request:", error);
//   }
// });

// // Start the server
// server.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });
