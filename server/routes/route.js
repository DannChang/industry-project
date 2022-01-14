const express = require("express");
const fs = require("fs");
const app = express();
const router = express.Router();

app.use(express.json());

require("dotenv").config();

const readData = () => {
  const dataDetails = JSON.parse(fs.readFileSync("./data/data.json"));
  return dataDetails;
};

router.get("/", (req, res) => {
  return res.json(readData());
});

module.exports = router;
