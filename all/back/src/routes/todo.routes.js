const express = require("express");
const router = express.Router();
let arrayTodo = require("../todoSeed");

router.get("/", async (req, res) => {
  try {
    res.status(200).json(arrayTodo);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const createUser = arrayTodo.push(user);
    res.status(200).json(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const newUser = req.body;
    const UserFind = arrayTodo.findIndex((user) => user.id == userId);

    arrayTodo[UserFind] = {
      id,
      ...newUser,
    };
    res.status(200).json(arrayTodo[UserFind]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = req.params.id;
    const findUserDelete = arrayTodo.filter((item) => item.id != deleteUser);
    arrayTodo.splice(findUserDelete, 1);
    res.status(200).json({});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
