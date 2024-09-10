// app.get("/", (req, res) => {
//   res.send("Homepage");
// });

// app.get("/about", (req, res) => {
//   const userName = req.query.name || "Guest";
//   const timestamp = new Date().toISOString();
//   const jsonData = readJsonFile("data.json");
//   const newData = {
//     id: jsonData.length + 1,
//     name: userName,
//     timestamp: timestamp,
//   };
//   jsonData.push(newData);
//   writeJsonFile("data.json", jsonData);
//   res.send(`Hello, ${userName}! You visited at ${timestamp}`);
// });

// app.get("/data", (req, res) => {
//   const jsonData = readJsonFile("data.json");
//   res.json(jsonData);
// });

// app.listen(5000, () => {
//   console.log("Server is running on port 5000 http://localhost:5000");
// });
