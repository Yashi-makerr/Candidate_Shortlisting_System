const axios = require("axios");
const Candidate = require("../models/Complaint");

exports.aiShortlist = async (req, res) => {

    try {

        const job = req.body;

        const candidates = await Candidate.find();

        const candidateText = candidates.map((c, index) => `
${index + 1}.
Name: ${c.name}
Skills: ${c.skills.join(", ")}
Experience: ${c.experience}
Bio: ${c.bio}
`).join("\n");

        const prompt = `

You are an expert AI recruiter.

Analyze candidates deeply.

Understand related technologies.

Examples:
- Express.js means Node.js backend
- Next.js relates to React
- Tailwind relates to frontend

Job Requirements:
${job.requiredSkills.join(", ")}

Minimum Experience:
${job.minExperience}

Candidates:
${candidateText}

Return:
1. best candidates
2. ranking
3. score out of 100
4. strengths
5. weaknesses
6. hiring recommendation
`;

        const response = await axios.post(
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
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.log(error.response?.data || error.message);

        res.status(500).json({
            error: error.message
        });
    }
};