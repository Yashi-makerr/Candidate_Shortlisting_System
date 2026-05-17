router.get("/search", async (req, res) => {

  const skill = req.query.skill;

  const candidates = await Candidate.find({
    skills: { $regex: skill, $options: "i" }
  });

  res.json(candidates);
});