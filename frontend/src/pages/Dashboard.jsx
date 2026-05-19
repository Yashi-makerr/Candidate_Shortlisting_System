import { useEffect, useState } from "react";

import DashboardLayout
from "../layouts/DashboardLayout";

import Hero
from "../components/Hero";

import ComplaintForm
from "../components/ComplaintForm";

import ComplaintCard
from "../components/ComplaintCard";

import SearchBar
from "../components/SearchBar";

import API
from "../services/api";

function Dashboard() {

  const [search, setSearch] =
  useState("");

  const [results, setResults] =
  useState([]);

  // FETCH COMPLAINTS
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

      setResults(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <DashboardLayout>

      {/* HERO SECTION */}

      <Hero />

      {/* COMPLAINT FORM */}

      <div className="
      grid
      grid-cols-1
      gap-6
      ">

        <ComplaintForm
          fetchComplaints={
            fetchComplaints
          }
        />

      </div>

      {/* SEARCH BAR */}

      <div className="mt-10">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>

      {/* COMPLAINT CARDS */}

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-5
      mt-10
      ">

        {
          results

          .filter((complaint) =>

            complaint.location
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )

          )

          .map((complaint) => (

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

export default Dashboard;