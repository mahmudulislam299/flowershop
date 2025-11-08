require("dotenv").config();
const express = require("express");
const connect = require("./src/config/db");                 // ⬅️ note src/
const flower_data = require("./src/controllers/flowercontrollers");  // ⬅️ note src/

const app = express();

app.use(express.json());
app.use("/flower", flower_data);

const PORT = process.env.PORT || 5001;

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  }
};

start();
