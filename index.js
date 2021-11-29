const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./db/db.js");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});