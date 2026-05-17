import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

function CandidateCard({ candidate }) {

  // INTERVIEW QUESTIONS STATE
  const [questions, setQuestions] =
  useState("");

  // SAVE CANDIDATE FUNCTION
  const saveCandidate = async () => {

    await API.post("/shortlist", {
      candidateId: candidate._id
    });

    toast.success("Candidate Saved");
  };

  // GENERATE QUESTIONS FUNCTION
  const generateQuestions =
  async () => {

    const response =
    await API.post(
      "/interview/generate-questions",
      {
        skills: candidate.skills
      }
    );

    setQuestions(
      response.data
      .choices[0]
      .message
      .content
    );
  };

  return (
      <div className="glass p-5 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-cyan-500/10">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">
            {candidate.name}
          </h2>

          <p className="text-slate-400 text-sm">
            {candidate.email}
          </p>

        </div>

        <div className="bg-cyan-500 px-4 py-2 rounded-full font-bold">
          {candidate.matchScore}%
        </div>

      </div>

      <div className="flex flex-wrap gap-2 mt-5">

        {
          candidate.skills.map((skill, index) => (

            <span
              key={index}
              className="bg-slate-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>

          ))
        }

      </div>

      <p className="mt-4 text-slate-300">
        Experience: {candidate.experience} years
      </p>

      {/* SAVE BUTTON */}

      <button
        onClick={saveCandidate}
        className="mt-4 bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-700"
      >
        Save Candidate
      </button>

      {/* GENERATE QUESTIONS BUTTON */}

      <button
        onClick={generateQuestions}
        className="mt-3 bg-cyan-600 px-4 py-2 rounded-xl hover:bg-cyan-700 block"
      >
        Generate Interview Questions
      </button>

      {/* QUESTIONS DISPLAY */}

      {
        questions && (

          <div className="mt-4 whitespace-pre-wrap text-sm bg-slate-900 p-4 rounded-xl">

            {questions}

          </div>

        )
      }

    </div>
  );
}

export default CandidateCard;