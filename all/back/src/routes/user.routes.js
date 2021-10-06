const express = require("express");
const router = express.Router();
let arr = require("../seed");

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
  const president = req.body;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.id == userId) {
      user = element;
      user.name = president.name;
      user.description = president.description;
      user.pic = president.pic;
    }
  }

  if (!user) {
    res.status(404);
  }

  res.status(200).json(user);
});

router.delete("/:id", (req, res) => {
  userId = req.params.id;
  const presidents = arr.filter((item) => item.id != userId);
  //console.log(presidents);
  arr = presidents;
  res.status(200).json({ msg: "ok" });
});

module.exports = router;
