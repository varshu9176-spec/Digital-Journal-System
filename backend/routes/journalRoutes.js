const express = require("express");
const router = express.Router();
const Journal = require("../models/Journal");

// Create
router.post("/", async (req, res) => {
  try {
    const journal = await Journal.create(req.body);
    res.status(201).json(journal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 });
    res.json(journals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const journal = await Journal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(journal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ message: "Journal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
