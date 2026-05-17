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

      const { question } =
      req.body;

      const response =
      await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {
          model: "openai/gpt-4o-mini",

          messages: [

            {
              role: "system",

              content:
              `
              You are an AI Interview Assistant.

              Help candidates prepare for interviews.

              Give detailed,
              beginner-friendly,
              interview-style answers.
              `
            },

            {
              role: "user",
              content: question
            }

          ]
        },

        {
          headers: {

            Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

            "Content-Type":
            "application/json"
          }
        }
      );

      res.json({

        reply:
        response.data
        .choices[0]
        .message.content

      });

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      res.status(500).json({
        message: "AI Error"
      });
    }
  }
);

module.exports = router;