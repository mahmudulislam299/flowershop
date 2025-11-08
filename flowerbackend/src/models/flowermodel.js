const mongoose = require("mongoose");   // ⬅️ ADD THIS LINE

// schemas for home page flower
const flowerSchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },   // fixed "require" -> "required"
    price: { type: Number, required: true },  // fixed "require" -> "required"
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flower = mongoose.model("Flower", flowerSchemas);

// schemas for home page pot
const potSchemas = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Pot = mongoose.model("Pot", potSchemas);

module.exports = { Flower, Pot };
