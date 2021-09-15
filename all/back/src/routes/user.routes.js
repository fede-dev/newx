const express = require("express");
const router = express.Router();
const arr = require("../seed");

router.get("/", (req, res) => {
  res.status(200).json(arr);
});

module.exports = router;
