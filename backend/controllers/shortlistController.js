const Shortlisted =
require("../models/Shortlisted");

exports.saveCandidate =
async (req, res) => {

  try {

    const saved =
    new Shortlisted({
      candidateId: req.body.candidateId
    });

    await saved.save();

    res.json({
      message: "Candidate Saved"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};