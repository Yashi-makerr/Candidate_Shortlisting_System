import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

function CandidateForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    bio: ""
  });
  const [resume, setResume] = useState(null);
  const handleSubmit =
        async (e) => {

        e.preventDefault();

        const payload = {
            ...form,
            skills: form.skills.split(",")
        };

        await API.post(
            "/candidates",
            payload
        );

        if (resume) {

            const formData =
            new FormData();

            formData.append(
            "resume",
            resume
            );

            await API.post(
            "/candidates/upload",
            formData
            );
        }

        toast.success(
            "Candidate Added"
        ); 
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass p-6 rounded-2xl"
    >

      <h2 className="text-2xl font-bold mb-5">
        Add Candidate
      </h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <input
        type="text"
        placeholder="Skills"
        value={form.skills}
        onChange={(e) => setForm({ ...form, skills: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <input
        type="number"
        placeholder="Experience"
        value={form.experience}
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />

      <textarea
        placeholder="Bio"
        value={form.bio}
        onChange={(e) => setForm({ ...form, bio: e.target.value })}
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
      />
      <input
        type="file"
        onChange={(e) =>
            setResume(e.target.files[0])
        }
        className="w-full p-3 mb-4 rounded-xl bg-slate-900 border border-slate-700"
        />

      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20">
        Add Candidate
      </button>

    </form>
  );
}

export default CandidateForm;