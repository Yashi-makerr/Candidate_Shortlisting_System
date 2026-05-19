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

      const text =
      message.toLowerCase();

      // =========================
      // LOCAL AI RESPONSES
      // =========================

      let reply = "";

      // WATER

      if (
        text.includes("water")
      ) {

        reply = `
Water supply related complaints are handled by the Water Supply Department.

Suggested Action:
• Mention exact location
• Upload leakage proof if available
• Mark urgency if water wastage is high

Priority:
Medium Priority

Expected Resolution Time:
24-48 hours.
`;

      }

      // ELECTRICITY

      else if (
        text.includes("electric") ||
        text.includes("power")
      ) {

        reply = `
Electricity complaints are considered HIGH priority.

Department:
Electricity Department

Recommended Action:
• Avoid touching exposed wires
• Report transformer/sparking issues immediately
• Mention outage duration

Expected Resolution Time:
2-12 hours.
`;

      }

      // GARBAGE

      else if (
        text.includes("garbage") ||
        text.includes("waste")
      ) {

        reply = `
Garbage complaints are handled by the Sanitation Department.

Suggested Action:
• Mention area details
• Mention garbage quantity
• Add health hazard details if present

Priority:
Medium Priority.
`;

      }

      // ROAD

      else if (
        text.includes("road") ||
        text.includes("pothole")
      ) {

        reply = `
Road damage complaints are handled by the Road Maintenance Department.

Suggested Action:
• Mention road name
• Mention accident risk
• Mention traffic blockage details

Priority:
Medium to High.
`;

      }

      // DRAINAGE

      else if (
        text.includes("drain") ||
        text.includes("sewer")
      ) {

        reply = `
Drainage blockage complaints are handled by the Drainage Department.

Suggested Action:
• Mention water overflow condition
• Mention smell or hygiene issues
• Mention affected area

Priority:
Medium Priority.
`;

      }

      // WOMEN SAFETY

      else if (
        text.includes("women") ||
        text.includes("harassment") ||
        text.includes("safety")
      ) {

        reply = `
Women safety complaints are treated as HIGH PRIORITY.

Department:
Police Department

Recommended Action:
• Contact emergency helpline immediately
• Share incident location
• Mention suspect details if possible

Emergency action may be initiated.
`;

      }

      // DEFAULT

      else {

        reply = `
Your complaint/query has been received successfully.

Please provide:
• complaint type
• location
• issue details

Supported complaint categories:
• Water Supply
• Electricity
• Garbage
• Road Damage
• Drainage
• Pollution
• Traffic
• Women Safety
• Street Light
`;

      }

      // =========================
      // RESPONSE
      // =========================

      res.json({
        reply
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        error:
        "AI Assistant Failed"

      });

    }

  }

);
module.exports = router;