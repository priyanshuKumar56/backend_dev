const express = require("express");
const { userConnection } = require("./connection");
const { logres_req } = require("./midleware/index");

// RestFull Api  START
const userrouter = require("./routes/user");
const app = express();

app.use(express.urlencoded({ extended: false }));
const port = 5000;

// contection
userConnection("mongodb://127.0.0.1:27017/app-1").then(() => {
  console.log("mongodb connected");
});

// log store
logres_req("log.txt");
// routes
app.get("/", (req, res) => {
  return res.end("Home Page");
});
app.use("/api/users", userrouter);

app.listen(port, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
//
