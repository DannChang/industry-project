const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const PORT = process.env.PORT || 5050;

// const routes = require("./routes/");
// app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
