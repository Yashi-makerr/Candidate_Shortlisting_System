const express = require("express");

const router = express.Router();

const {
  saveCandidate
} = require("../controllers/shortlistController");

router.post("/", saveCandidate);

module.exports = router;