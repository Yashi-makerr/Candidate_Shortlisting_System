const express = require("express");

const axios = require("axios");

const router = express.Router();

const {
  aiShortlist
} = require("../controllers/aiController");


// AI SHORTLIST

router.post(
  "/shortlist",
  aiShortlist
);


// INTERVIEW AI CHAT

router.post(
  "/interview-chat",

  async (req, res) => {

    try {

      const { message } = req.body;

      const prompt = `
      You are an AI Interview Assistant.

      Answer this interview question professionally:

      ${message}
      `;

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",

        {
          model: "meta-llama/llama-3-8b-instruct",

          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        },

        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      res.json({
        reply:
          response.data
          .choices[0]
          .message
          .content
      });

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      res.status(500).json({
        error: "AI Chat Failed"
      });
    }
  }
);
module.exports = router;