const mongoose = require("mongoose");

async function userConnection(path) {
  return mongoose.connect(path);
}
module.exports = {
  userConnection,
};
