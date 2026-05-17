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

      // CHECK FILE

      if (!req.file) {

        return res.status(400).json({

          message:
          "No file uploaded"

        });
      }

      let extractedText = "";

      // SAFE PDF PARSE

      try {

        extractedText =
        await parseResume(
          req.file.path
        );

      } catch (pdfError) {

        console.log(
          "PDF Parse Error:",
          pdfError.message
        );

        extractedText =
        "Resume parsing failed";
      }

      res.json({

        success: true,

        file: req.file,

        extractedText

      });

    } catch (error) {

      console.log(
        "Upload Error:",
        error.message
      );

      res.status(500).json({

        message:
        "Resume upload failed"

      });
    }
  }
);
module.exports = router;