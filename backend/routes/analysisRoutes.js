const express = require("express");

const router = express.Router();


// ==========================
// AI ANALYSIS
// ==========================

router.post(

  "/analyze",

  async (req, res) => {

    try {

      const {
        title,
        description,
        category
      } = req.body;

      const text =
      (
        title +
        " " +
        description
      ).toLowerCase();

      let urgency = "Low";

      let department =
      "Public Service Department";

      // ======================
      // URGENCY
      // ======================

      if (
        text.includes("fire") ||
        text.includes("electric") ||
        text.includes("accident") ||
        text.includes("danger")
      ) {

        urgency = "High";

      }

      else if (
        text.includes("water") ||
        text.includes("garbage") ||
        text.includes("drain")
      ) {

        urgency = "Medium";

      }

      // ======================
      // DEPARTMENT
      // ======================

      if (
        category === "Water Supply"
      ) {

        department =
        "Water Department";

      }

      else if (
        category === "Electricity"
      ) {

        department =
        "Electricity Department";

      }

      else if (
        category === "Garbage"
      ) {

        department =
        "Sanitation Department";

      }

      else if (
        category === "Road Damage"
      ) {

        department =
        "Road Maintenance Department";

      }

      else if (
        category === "Drainage"
      ) {

        department =
        "Drainage Department";

      }

      // ======================
      // SUMMARY
      // ======================

      const summary =
      description.slice(0, 150);

      // ======================
      // AUTO RESPONSE
      // ======================

      const autoResponse =

      `Your complaint regarding "${title}" has been successfully registered. ${department} will review and resolve the issue soon.`;

      res.json({

        urgency,
        department,
        summary,
        autoResponse

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
        error.message

      });

    }

  }

);


// ==========================
// AI COMPLAINT ASSISTANT
// ==========================

router.post(

  "/interview-chat",

  async (req, res) => {

    try {

      const { message } = req.body;

      const text =
      message.toLowerCase();

      let reply = "";

      // WATER

      if (
        text.includes("water")
      ) {

        reply = `
Water complaints are handled by the Water Department.

Steps:
• Mention leakage/blockage location
• Mention water wastage severity
• Upload proof if available

Priority:
Medium Priority
`;

      }

      // ELECTRICITY

      else if (
        text.includes("electric") ||
        text.includes("power")
      ) {

        reply = `
Electricity complaints are HIGH priority.

Department:
Electricity Department

Steps:
• Avoid exposed wires
• Mention outage duration
• Mention affected area

Expected resolution:
2-12 hours
`;

      }

      // GARBAGE

      else if (
        text.includes("garbage")
      ) {

        reply = `
Garbage complaints are handled by the Sanitation Department.

Mention:
• Area name
• Garbage amount
• Hygiene issues

Priority:
Medium Priority
`;

      }

      // ROAD

      else if (
        text.includes("road") ||
        text.includes("pothole")
      ) {

        reply = `
Road damage complaints are handled by Road Maintenance Department.

Mention:
• Road name
• Accident risks
• Traffic blockage details
`;

      }

      // DEFAULT

      else {

        reply = `
Supported complaint categories:

• Water Supply
• Electricity
• Garbage
• Drainage
• Road Damage
• Pollution
• Women Safety
• Street Light

Please describe your complaint clearly.
`;

      }

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