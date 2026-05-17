function matchCandidates(candidates, job) {

    return candidates.map(candidate => {

        const matchedSkills = candidate.skills.filter(skill =>
            job.requiredSkills.includes(skill)
        );

        const skillScore =
            matchedSkills.length / job.requiredSkills.length;

        const expScore =
            candidate.experience >= job.minExperience ? 1 : 0;

        const finalScore =
            (skillScore * 0.8) + (expScore * 0.2);

        return {
            ...candidate._doc,
            matchedSkills,
            matchScore: Math.round(finalScore * 100)
        };

    }).sort((a, b) => b.matchScore - a.matchScore);
}

module.exports = matchCandidates;