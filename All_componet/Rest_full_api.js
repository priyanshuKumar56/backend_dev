const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");

// RestFull Api  START

const users = require("../MOCK_DATA.json");
const app = express();

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
const port = 5000;
const htmlFilePath = path.join(__dirname, "public", "index.html");

app.get("/", (req, res) => {
  res.sendFile(htmlFilePath);
  res.send("Homepage");
});

app.get("/api/user", (req, res) => {
  let html = "<ul>";
  users.forEach((user) => {
    html += `<li>${user.first_name}</li>`;
  });
  html += "</ul>";
  res.send(html);
});
app.get("/api/users", (req, res) => {
  res.json(users);
});
// post method
app.post("/api/users", (req, res) => {
  const body = req.body;

  //   console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "sucess", id: users.length });
  });
});

// app route

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  })
  .put((req, res) => {
    console.log(req.headers); // Log request headers
    console.log(req.body); // Log request body to debug

    const id = parseInt(req.params.id);
    const body = req.body;

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...body };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }
      res.json({ status: "success", id: id });
    });
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }
      res.json({ status: "success" });
    });
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
