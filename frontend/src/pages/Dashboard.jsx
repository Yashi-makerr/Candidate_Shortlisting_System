import { useState } from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import Hero
from "../components/Hero";

import CandidateForm
from "../components/CandidateForm";

import JobForm
from "../components/JobForm";

import CandidateCard
from "../components/CandidateCard";

import MatchChart
from "../charts/MatchChart";

import SkillsChart
from "../charts/SkillsChart";

import SearchBar
from "../components/SearchBar";


function Dashboard() {

  const [search, setSearch] =
  useState("");

  const [results, setResults] =
  useState([]);

  const [aiResult, setAiResult] =
  useState("");


  return (

    <DashboardLayout>

      {/* HERO SECTION */}

      <Hero />


      {/* TOP FORMS */}

      <div className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-6
      ">

        <CandidateForm />

        <JobForm
          setResults={setResults}
          setAiResult={setAiResult}
        />

      </div>


      {/* SEARCH */}

      <div className="mt-10">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>


      {/* CANDIDATE RESULTS */}

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-5
      mt-10
      ">

        {
          Array.isArray(results)

          &&

          results
          .filter((candidate) =>

            candidate.skills &&

            candidate.skills.some((skill) =>

              skill
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )

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


      {/* CHARTS */}

      {
        Array.isArray(results)

        &&

        results.length > 0 && (

          <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          mt-10
          ">

            <MatchChart
              data={results}
            />

            <SkillsChart
              data={results}
            />

          </div>

        )
      }


      {/* AI RESULT */}

      {
        aiResult && (

          <div className="
          glass
          p-6
          rounded-2xl
          mt-10
          whitespace-pre-wrap
          ">

            <h2 className="
            text-2xl
            font-bold
            mb-4
            text-cyan-400
            ">

              AI Recommendation

            </h2>

            <p className="
            text-slate-300
            leading-8
            ">

              {aiResult}

            </p>

          </div>

        )
      }

    </DashboardLayout>
  );
}

export default Dashboard;