// src/models/Cake.js
const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema(
  {
    // Custom ID you will use in URLs: /cake/homepage/:id
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String }, // "birthday", "wedding", etc.
    price: { type: Number, required: true },
    image: { type: String, required: true }, // image URL
  },
  { timestamps: true }
);

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = { Cake };
