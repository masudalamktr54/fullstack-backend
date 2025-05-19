// require("dotenv").config({ path: "./env" });
// require("dotenv").config({ path: "../.env" });
// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
