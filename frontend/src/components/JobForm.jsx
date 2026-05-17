import { useState } from "react";
import API from "../services/api";

function JobForm({ setResults, setAiResult }) {

  const [job, setJob] = useState({
    requiredSkills: "",
    minExperience: ""
  });

  const handleMatch = async () => {

    const payload = {
      requiredSkills: job.requiredSkills.split(","),
      minExperience: Number(job.minExperience)
    };

    const response = await API.post("/match", payload);

    setResults(response.data);
  };

  const handleAI = async () => {

    const payload = {
      requiredSkills: job.requiredSkills.split(","),
      minExperience: Number(job.minExperience)
    };

    const response = await API.post("/ai/shortlist", payload);

    setAiResult(response.data.choices[0].message.content);
  };

  return (
    <div className="glass p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-5">
        Job Requirement
      </h2>

      <input
        type="text"
        placeholder="Required Skills"
        onChange={(e) => setJob({ ...job, requiredSkills: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <input
        type="number"
        placeholder="Minimum Experience"
        onChange={(e) => setJob({ ...job, minExperience: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <button
        onClick={handleMatch}
        className="
        bg-gradient-to-r
        from-blue-500
        to-cyan-500
        w-full
        py-3
        rounded-xl
        font-bold
        mb-3
        hover:scale-[1.02]
        transition-all
        duration-300
        "
      >
        Basic Match
      </button>

      <button
        onClick={handleAI}
        className="bg-gradient-to-r from-purple-500 to-pink-500 w-full py-3 rounded-xl font-bold hover:scale-[1.02] transition-all duration-300"
    >
        AI Ranking
      </button>

    </div>
  );
}

export default JobForm;