const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post(
  "/generate-questions",
  async (req, res) => {

    try {

      const { skills } = req.body;

      const prompt = `
Generate 10 technical interview questions for:
${skills.join(", ")}
`;

      const response =
      await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-4o-mini",

          messages: [
            {
              role: "user",
              content: prompt
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

      res.json(response.data);

    } catch (error) {

      res.status(500).json({
        error: error.message
      });

    }
  }
);

module.exports = router;