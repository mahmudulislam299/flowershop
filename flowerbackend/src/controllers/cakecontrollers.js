// src/controllers/cakecontrollers.js
const express = require("express");
const { Cake } = require("../models/Cake");

const router = express.Router();

/* ==========================
   🧁 Cake Routes Only
========================== */

// Create cake
router.post("/homepage", async (req, res) => {
  try {
    const cake = await Cake.create(req.body);
    return res.status(201).json(cake);
  } catch (err) {
    console.error("Error creating cake:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all cakes
router.get("/homepage", async (req, res) => {
  try {
    const cakes = await Cake.find().lean().exec();
    return res.status(200).json(cakes);
  } catch (err) {
    console.error("Error fetching cakes:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get single cake by custom ID
router.get("/homepage/:id", async (req, res) => {
  try {
    const cake = await Cake.findOne({ id: req.params.id }).lean().exec();
    if (!cake) return res.status(404).json({ message: "Cake not found" });
    return res.status(200).json(cake);
  } catch (err) {
    console.error("Error fetching cake by ID:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Simple test route
router.get("/test", (req, res) => res.send("Cake router is working 🍰"));

module.exports = router;
