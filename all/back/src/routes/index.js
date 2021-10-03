const express = require("express");
const router = express.Router();

const users = require("../routes/user.routes");
const todo = require("../routes/todo.routes");

router.use("/users", users);
router.use("/todo", todo);

module.exports = router;
