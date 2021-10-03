const express = require("express");
const router = express.Router();
const arr = require("../seed");

router.get("/", (req, res) => {
  res.status(200).json(arr);
});

router.get("/:id", (req, res) => {
  let user;
  const userId = req.params.id;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.id == userId) {
      user = element;
    }
  }

  if (!user) {
    res.status(404);
  }

  res.status(200).json(user);
});

router.post("/:id", (req, res) => {
  let user;
  const userId = req.params.id;
  const newName = req.body.name;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.id == userId) {
      user = element;
      user.name = newName;
    }
  }

  if (!user) {
    res.status(404);
  }

  res.status(200).json(user);
});

module.exports = router;
