const express = require("express");
const Candidate = require("../models/Candidate");
const upload =require("../middleware/upload");
const parseResume = require("../utils/resumeParser");

const router = express.Router();

const {
    addCandidate,
    getCandidates
} = require("../controllers/candidateController");

router.post("/", addCandidate);

router.get("/", getCandidates);

router.get("/search", async (req, res) => {

  const skill = req.query.skill;

  const candidates = await Candidate.find({
    skills: { $regex: skill, $options: "i" }
  });

  res.json(candidates);
});

router.post(
  "/upload",
  upload.single("resume"),

  async (req, res) => {

    try {

      const resumeText =
      await parseResume(
        req.file.path
      );

      res.json({
        file: req.file,
        extractedText: resumeText
      });

    } catch (error) {

      res.status(500).json({
        error: error.message
      });

    }

  }
);
module.exports = router;