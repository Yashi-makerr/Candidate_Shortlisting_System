const Candidate = require("../models/Complaint");
const matchCandidates = require("../utils/complaintAnalyzer");

exports.shortlistCandidates = async (req, res) => {

    try {

        const job = req.body;

        const candidates = await Candidate.find();

        const rankedCandidates =
            matchCandidates(candidates, job);

        res.json(rankedCandidates);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};