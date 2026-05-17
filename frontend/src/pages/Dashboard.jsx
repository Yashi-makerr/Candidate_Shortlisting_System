import SearchBar from "../components/SearchBar";
import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import Hero from "../components/Hero";
import CandidateForm from "../components/CandidateForm";
import JobForm from "../components/JobForm";
import CandidateCard from "../components/CandidateCard";
import MatchChart from "../charts/MatchChart";
import SkillsChart from "../charts/SkillsChart";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [aiResult, setAiResult] = useState("");

  return (
    <DashboardLayout>

      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <CandidateForm />

        <JobForm
          setResults={setResults}
          setAiResult={setAiResult}
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

        {
        results
            .filter((candidate) =>
            candidate.skills.some((skill) =>
                skill
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            )
            .map((candidate) => (

            <CandidateCard
                key={candidate._id}
                candidate={candidate}
            />

            ))
        }

      </div>

      {
        results.length > 0 && (
          <MatchChart data={results} />
        )
      }
      {
        results.length > 0 && (
            <SkillsChart data={results} />
        )
      }

      {
        aiResult && (
          <div className="glass p-6 rounded-2xl mt-8 whitespace-pre-wrap">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              AI Recommendation
            </h2>

            {aiResult}
          </div>
        )
      }

    </DashboardLayout>
  );
}

export default Dashboard;