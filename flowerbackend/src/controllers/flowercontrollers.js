const express = require("express");
const { Flower, Pot } = require("../models/flowermodel");

const router = express.Router();

// Create flower
router.post("/homepage", async (req, res) => {
  try {
    const flower = await Flower.create(req.body);
    return res.status(201).json(flower);
  } catch (err) {
    console.error("Error creating flower:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all flowers
router.get("/homepage", async (req, res) => {
  try {
    const flowers = await Flower.find().lean().exec();
    return res.status(200).json(flowers);
  } catch (err) {
    console.error("Error fetching flowers:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Create pot
router.post("/pot", async (req, res) => {
  try {
    const pot = await Pot.create(req.body);
    return res.status(201).json(pot);
  } catch (err) {
    console.error("Error creating pot:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all pots
router.get("/pot", async (req, res) => {
  try {
    const pots = await Pot.find().lean().exec();
    return res.status(200).json(pots);
  } catch (err) {
    console.error("Error fetching pots:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/test", (req, res) => {
  return res.send("Flower router is working");
});

module.exports = router;    // ⬅️ important
