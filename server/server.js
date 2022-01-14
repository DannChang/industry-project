const express = require("express");
const cors = require("cors");
const route = require("./routes/route");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/data", route);

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
