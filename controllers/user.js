const User = require("../models/user");
async function handleallusers(req, res) {
  const allusers = await User.find({});

  return res.json(allusers);
}

async function handlepostusers(req, res) {
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

  await res.status(201).json({ mes: "sucess", id: result._id });
}

async function handlegetuserone(req, res) {
  const allusers = await User.find({});

  const id = req.params.id;
  const user = allusers.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
}
async function handleputuser(req, res) {
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
}
async function handledeleteuser(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ status: "success", id: req.params.id });
}
module.exports = {
  handleallusers,
  handlepostusers,
  handlegetuserone,
  handleputuser,
  handledeleteuser,
};
