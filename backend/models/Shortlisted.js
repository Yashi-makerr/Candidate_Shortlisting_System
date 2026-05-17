const mongoose = require("mongoose");

const ShortlistedSchema = new mongoose.Schema({

  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate"
  },

  savedAt: {
    type: Date,
    default: Date.now
  }

});

module.exports =
  mongoose.model(
    "Shortlisted",
    ShortlistedSchema
  );