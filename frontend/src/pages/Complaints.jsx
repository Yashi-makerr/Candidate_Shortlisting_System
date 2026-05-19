import { useEffect, useState }
from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import API
from "../services/api";

import ComplaintCard
from "../components/ComplaintCard";

function Complaints() {

  const [complaints,
  setComplaints] =
  useState([]);

  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints =
  async () => {

    try {

      const response =
      await API.get(
        "/complaints"
      );

      setComplaints(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <DashboardLayout>

      <h1 className="
      text-4xl
      font-bold
      text-cyan-400
      mb-8
      ">

        Complaints Page

      </h1>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
      ">

        {
          complaints.map(
            (complaint) => (

            <ComplaintCard
              key={complaint._id}
              complaint={complaint}
            />

          ))
        }

      </div>

    </DashboardLayout>

  );
}

export default Complaints;