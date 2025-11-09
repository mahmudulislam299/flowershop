const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // src/config/db.js
const cakeRouter = require("./controllers/cakecontrollers"); // src/controllers/cakecontrollers.js

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/cake", cakeRouter);

app.get("/", (req, res) => {
  res.send("Cake Shop API is running 🍰");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
