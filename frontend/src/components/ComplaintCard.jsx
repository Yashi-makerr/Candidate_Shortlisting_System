import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

function ComplaintCard({
  complaint
}) {

  const [status,
  setStatus] =
  useState(
    complaint.status
  );

  const updateStatus =
  async (newStatus) => {

    try {

      await API.put(

        `/complaints/${complaint._id}`,

        {
          status: newStatus
        }

      );

      setStatus(newStatus);

      toast.success(
        `Complaint marked as ${newStatus}`
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="
    glass
    p-6
    rounded-2xl
    shadow-lg
    ">

      {/* HEADER */}

      <div className="
      flex
      justify-between
      items-center
      mb-4
      ">

        <div>

          <h2 className="
          text-2xl
          font-bold
          ">

            {complaint.title}

          </h2>

          <p className="
          text-slate-400
          ">

            {complaint.category}

          </p>

        </div>

        {/* STATUS */}

        <div className={`

        px-4
        py-2
        rounded-full
        font-bold

        ${
          status === "Solved"
          ? "bg-green-500"

          : "bg-yellow-500"
        }

        `}>

          {status}

        </div>

      </div>

      {/* DESCRIPTION */}

      <p className="
      text-slate-300
      leading-7
      ">

        {complaint.description}

      </p>

      {/* DETAILS */}

      <div className="
      mt-5
      space-y-3
      text-sm
      text-slate-300
      ">

        <p>

          <span className="text-cyan-400 font-bold">
            Location:
          </span>

          {" "}
          {complaint.location}

        </p>

        <p>

          <span className="text-cyan-400 font-bold">
            Urgency:
          </span>

          {" "}

          <span className={`
          font-bold

          ${
            complaint.urgency === "High"
            ? "text-red-400"

            : complaint.urgency === "Medium"
            ? "text-yellow-400"

            : "text-green-400"
          }
          `}>

            {complaint.urgency}

          </span>

        </p>

        <p>

          <span className="text-cyan-400 font-bold">
            Department:
          </span>

          {" "}
          {complaint.department}

        </p>

        <p>

          <span className="text-cyan-400 font-bold">
            AI Summary:
          </span>

          {" "}
          {complaint.aiSummary}

        </p>

        <p>

          <span className="text-cyan-400 font-bold">
            Auto Response:
          </span>

          {" "}
          {complaint.autoResponse}

        </p>

      </div>

      {/* ACTION BUTTONS */}

      <div className="
      flex
      gap-4
      mt-6
      ">

        <button

          onClick={() =>
            updateStatus(
              "Pending"
            )
          }

          className="
          bg-yellow-500
          hover:bg-yellow-600
          px-4
          py-2
          rounded-xl
          font-bold
          "

        >

          Pending

        </button>

        <button

          onClick={() =>
            updateStatus(
              "Solved"
            )
          }

          className="
          bg-green-600
          hover:bg-green-700
          px-4
          py-2
          rounded-xl
          font-bold
          "

        >

          Solved

        </button>

      </div>

    </div>

  );
}

export default ComplaintCard;