const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "User 1" }, { id: 2, name: "User 2" }]);
});

module.exports = router;
