import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

import CandidateCard
from "../components/CandidateCard";

function Candidates() {

  const [candidates, setCandidates] =
  useState([]);

  useEffect(() => {

    fetchCandidates();

  }, []);

  const fetchCandidates =
  async () => {

    const response =
    await API.get("/candidates");

    setCandidates(response.data);
  };

  return (

    <div>

      <div className="
      flex
      justify-between
      items-center
      mb-8
      ">

        <h1 className="
        text-4xl
        font-bold
        ">

          Candidates

        </h1>

        <div className="
        bg-cyan-500
        px-5
        py-3
        rounded-xl
        font-bold
        ">

          Total:
          {candidates.length}

        </div>

      </div>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
      ">

        {
          candidates.map((candidate) => (

            <CandidateCard
              key={candidate._id}
              candidate={candidate}
            />

          ))
        }

      </div>

    </div>
  );
}

export default Candidates;