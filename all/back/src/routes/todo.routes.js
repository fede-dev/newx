const express = require("express");
const router = express.Router();
const arrayTodo = require("../todoSeed");

router.get("/", async (req, res) => {
  try {
    res.status(200).json(arrayTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    const UserFind = await findUser(userId).findIndex(
      (user) => user.id == userId
    );

    arrayTodo[UserFind] = {
      id,
      ...newUser,
    };
    res.status(200).json(arrayTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = req.params.id;
    const findUserDelete = await deleteUserOk(deleteUser).filter(
      (id) => id.id != deleteUser
    );
    arrayTodo.splice(findUserDelete);
    res.status(200).json(arrayTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
