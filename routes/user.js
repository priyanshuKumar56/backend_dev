const express = require("express");
const {
  handleallusers,
  handlepostusers,
  handlegetuserone,
  handleputuser,
  handledeleteuser,
} = require("../controllers/user");
const router = express.Router();
router.route("/").get(handleallusers).post(handlepostusers);

// app route

router
  .route("/:id")
  .get(handlegetuserone)
  .put(handleputuser)
  .delete(handledeleteuser);

module.exports = router;
