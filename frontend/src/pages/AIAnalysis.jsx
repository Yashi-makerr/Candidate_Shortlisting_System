import { useEffect, useState } from "react";

import API from "../services/api";

import DashboardLayout
from "../layouts/DashboardLayout";

function AIAnalysis() {

  const [complaints, setComplaints] =
  useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints =
  async () => {

    try {

      const response =
      await API.get("/complaints");

      setComplaints(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  // =========================
  // TOTAL COUNTS
  // =========================

  const highPriority =
  complaints.filter(
    (c) => c.urgency === "High"
  ).length;

  const pending =
  complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const solved =
  complaints.filter(
    (c) => c.status === "Solved"
  ).length;

  return (

    <DashboardLayout>

      <h1 className="
      text-4xl
      font-bold
      text-cyan-400
      mb-8
      ">

        AI Complaint Analysis

      </h1>

      {/* STATS */}

      <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      mb-10
      ">

        <div className="
        glass
        p-6
        rounded-2xl
        text-center
        ">

          <h2 className="
          text-4xl
          font-bold
          text-red-400
          ">

            {highPriority}

          </h2>

          <p className="mt-3">
            High Priority Complaints
          </p>

        </div>

        <div className="
        glass
        p-6
        rounded-2xl
        text-center
        ">

          <h2 className="
          text-4xl
          font-bold
          text-yellow-400
          ">

            {pending}

          </h2>

          <p className="mt-3">
            Pending Complaints
          </p>

        </div>

        <div className="
        glass
        p-6
        rounded-2xl
        text-center
        ">

          <h2 className="
          text-4xl
          font-bold
          text-green-400
          ">

            {solved}

          </h2>

          <p className="mt-3">
            Solved Complaints
          </p>

        </div>

      </div>

      {/* AI ANALYSIS CARDS */}

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
      ">

        {
          complaints.map((complaint) => (

            <div
              key={complaint._id}
              className="
              glass
              p-6
              rounded-2xl
              "
            >

              <div className="
              flex
              justify-between
              items-center
              mb-4
              ">

                <h2 className="
                text-2xl
                font-bold
                ">

                  {complaint.title}

                </h2>

                <span className={`
                px-4
                py-2
                rounded-full
                font-bold

                ${
                  complaint.urgency === "High"
                  ? "bg-red-500"

                  : complaint.urgency === "Medium"
                  ? "bg-yellow-500"

                  : "bg-green-500"
                }
                `}>

                  {complaint.urgency}

                </span>

              </div>

              <p className="
              text-slate-300
              mb-4
              ">

                {complaint.description}

              </p>

              <div className="
              space-y-3
              text-slate-400
              ">

                <p>
                  <span className="font-bold text-cyan-400">
                    Category:
                  </span>

                  {" "}
                  {complaint.category}
                </p>

                <p>
                  <span className="font-bold text-cyan-400">
                    Department:
                  </span>

                  {" "}
                  {complaint.department}
                </p>

                <p>
                  <span className="font-bold text-cyan-400">
                    AI Summary:
                  </span>

                  {" "}
                  {complaint.aiSummary}
                </p>

                <p>
                  <span className="font-bold text-cyan-400">
                    Auto Response:
                  </span>

                  {" "}
                  {complaint.autoResponse}
                </p>

                <p>
                  <span className="font-bold text-cyan-400">
                    Status:
                  </span>

                  {" "}
                  {complaint.status}
                </p>

              </div>

            </div>

          ))
        }

      </div>

    </DashboardLayout>

  );
}

export default AIAnalysis;