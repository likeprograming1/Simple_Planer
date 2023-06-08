const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
})