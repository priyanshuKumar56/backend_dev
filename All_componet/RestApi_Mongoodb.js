// // const math = require("./math");
// // console.log(math.add(2, 4));

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");

// RestFull Api  START

const app = express();

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
const port = 5000;

// contection
mongoose
  .connect("mongodb://127.0.0.1:27017/app-1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
// schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    job_title: {
      type: String,
    },
  },
  { timestamps: true }
);
// model
const User = mongoose.model("User", userSchema);
// routes
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/api/user", async (req, res) => {
  const allusers = await User.find({});
  let html = "<ul>";
  allusers.forEach((user) => {
    html += `<li>${user.first_name}</li>`;
  });
  html += "</ul>";
  res.send(html);
});
app.get("/api/users", async (req, res) => {
  const allusers = await User.find({});

  return res.json(allusers);
});
// post method
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).send("Please fill in all fields");
  }
  //   console.log(body);
  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log(result);
  res.status(201).json({ mes: "sucess" });
});

// app route

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const allusers = await User.find({});

    const id = req.params.id;
    const user = allusers.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  })
  .put(async (req, res) => {
    const allusers = await User.find({});

    const id = req.params.id;
    const user = allusers.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findByIdAndUpdate(
      id,
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        job_title: req.body.job_title,
      },
      { new: true }
    );
    return res.status(200).json({ mes: "sucess" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ status: "success", id: req.params.id });
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});
//
