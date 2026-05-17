const express =
require("express");

const axios =
require("axios");

const router =
express.Router();


router.post(
  "/generate-questions",

  async (req, res) => {

    try {

      const { skills } =
      req.body;

      const prompt = `

Generate 10 technical interview questions for:

${skills.join(", ")}

Give beginner-friendly questions.

`;

      const response =
      await axios.post(

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

            Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

            "Content-Type":
            "application/json"

          }

        }

      );

      res.json({

        content:
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

        message:
        "Interview Question AI Failed"

      });

    }
  }
);

module.exports = router;