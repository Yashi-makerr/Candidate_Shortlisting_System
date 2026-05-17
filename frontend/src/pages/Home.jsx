import { useState } from "react";

import CandidateForm from "../components/CandidateForm";
import JobForm from "../components/JobForm";
import MatchResults from "../components/MatchResults";

function Home() {

    const [results, setResults] = useState([]);
    const [aiResult, setAiResult] = useState("");

    return (
        <div className="max-w-5xl mx-auto p-6">

            <h1 className="text-4xl font-bold mb-6">
                AI Candidate Shortlisting System
            </h1>

            <div className="grid grid-cols-2 gap-4">

                <CandidateForm />

                <JobForm
                    setResults={setResults}
                    setAiResult={setAiResult}
                />

            </div>

            <MatchResults
                results={results}
                aiResult={aiResult}
            />

        </div>
    );
}

export default Home;