import { useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

function ComplaintForm() {

  const [loading, setLoading] =
  useState(false);

  const [form, setForm] =
  useState({

    name: "",
    email: "",
    title: "",
    description: "",
    category: "",
    location: ""

  });

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // =========================
      // AI ANALYSIS
      // =========================

      const aiResponse =
      await API.post(

        "/ai/analyze",

        form

      );

      const aiData =
      aiResponse.data;

      // =========================
      // SAVE COMPLAINT
      // =========================

      await API.post(

        "/complaints",

        {

          ...form,

          urgency:
          aiData.urgency,

          department:
          aiData.department,

          aiSummary:
          aiData.summary,

          autoResponse:
          aiData.autoResponse,

          status:
          "Pending"

        }

      );

      toast.success(
        "Complaint Registered Successfully"
      );

      setForm({

        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
        location: ""

      });

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed to Register Complaint"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="
      glass
      p-6
      rounded-2xl
      "
    >

      <h2 className="
      text-2xl
      font-bold
      mb-5
      ">

        Register Complaint

      </h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <input
        type="text"
        placeholder="Complaint Title"
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value
          })
        }
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <textarea
        placeholder="Complaint Description"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value
          })
        }
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <select

        value={form.category}

        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value
          })
        }

        className="
        w-full
        p-3
        mb-4
        rounded-xl
        bg-slate-900
        border
        border-slate-700
        "

      >

        <option value="">
          Select Category
        </option>

        <option>
          Water Supply
        </option>

        <option>
          Electricity
        </option>

        <option>
          Garbage
        </option>

        <option>
          Road Damage
        </option>

        <option>
          Drainage
        </option>

        <option>
          Street Light
        </option>

        <option>
          Pollution
        </option>

        <option>
          Traffic
        </option>

        <option>
          Women Safety
        </option>

      </select>

      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) =>
          setForm({
            ...form,
            location: e.target.value
          })
        }
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <button

        disabled={loading}

        className="
        w-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        py-3
        rounded-xl
        font-bold
        "

      >

        {
          loading
          ? "Submitting..."
          : "Submit Complaint"
        }

      </button>

    </form>
  );
}

export default ComplaintForm;