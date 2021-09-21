const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

var whitelist = ["http://localhost:3000/"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json("HOME");
});

app.listen(PORT, () => {
  console.log("running on 4000");
});
