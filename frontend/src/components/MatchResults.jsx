function MatchResults({ results, aiResult }) {

    return (
        <div className="mt-4">

            <h2 className="text-2xl font-bold mb-4">
                Shortlisted Candidates
            </h2>

            {
                results.map((candidate) => (
                    <div
                        key={candidate._id}
                        className="border p-4 mb-2 rounded"
                    >
                        <h3 className="font-bold">
                            {candidate.name}
                        </h3>

                        <p>
                            Match Score:
                            {candidate.matchScore}%
                        </p>

                        <p>
                            Skills:
                            {candidate.skills.join(", ")}
                        </p>

                        <p>
                            Matched:
                            {candidate.matchedSkills.join(", ")}
                        </p>
                    </div>
                ))
            }

            {
                aiResult && (
                    <div className="mt-6 p-4 border rounded bg-gray-100">
                        <h2 className="font-bold text-xl mb-2">
                            AI Recommendation
                        </h2>

                        <pre className="whitespace-pre-wrap">
                            {aiResult}
                        </pre>
                    </div>
                )
            }

        </div>
    );
}

export default MatchResults;