const fs = require("fs");
function logres_req(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now().toLocaleString()}: ${req.ip}   ${req.method}: ${
        req.path
      }\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = {
  logres_req,
};
