const express = require("express");

const Complaint =
require("../models/Complaint");

const router = express.Router();


// ADD COMPLAINT
router.post("/", async (req, res) => {

  try {

    const complaint =
    await Complaint.create(req.body);

    res.status(201).json(complaint);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// GET ALL COMPLAINTS
router.get("/", async (req, res) => {

  const complaints =
  await Complaint.find();

  res.json(complaints);

});


// UPDATE STATUS
router.put("/:id", async (req, res) => {

  const updated =
  await Complaint.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);

});


// SEARCH BY LOCATION
router.get("/search/location", async (req, res) => {

  const complaints =
  await Complaint.find({

    location: {
      $regex: req.query.location,
      $options: "i"
    }

  });

  res.json(complaints);

});

module.exports = router;