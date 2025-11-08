require("dotenv").config(); // Load .env first

const express = require("express");
const connect = require("./src/config/db");                 // ⬅️ note src/
const flowerRouter = require("./src/controllers/flowercontrollers"); // ⬅️ note src/

const app = express();

// Parse JSON body
app.use(express.json());

// Simple root test route
app.get("/", (req, res) => {
  res.send("🌸 Flower API is running");
});

// Mount flower routes
app.use("/flower", flowerRouter); // /flower/homepage, /flower/pot, etc.

const PORT = process.env.PORT || 5001;

const start = async () => {
  try {
    await connect();
    console.log("✅ Connected to database");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
    process.exit(1);
  }
};

start();
