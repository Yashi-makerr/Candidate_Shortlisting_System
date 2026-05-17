import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../services/api";


function Register() {

  const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  password: ""
});
  const navigate = useNavigate();

  const handleRegister =
    async () => {

    try {

        await API.post(
        "/auth/register",
        form
        );

        toast.success(
        "Registration Successful"
        );

        navigate("/login");

    } catch (error) {

        toast.error(
        "Registration Failed"
        );

    }
    };
  return (

    <div className="
    min-h-screen
    flex
    items-center
    justify-center
    gradient-bg
    ">

      <div className="
      glass
      p-10
      rounded-3xl
      w-[400px]
      ">

        <h1 className="
        text-4xl
        font-bold
        mb-8
        text-center
        ">

          Create Account

        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="
          w-full
          p-4
          mb-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          "
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="
          w-full
          p-4
          mb-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          "
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="
          w-full
          p-4
          mb-4
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          "
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
            type="password"
            placeholder="Password"
            className="
            w-full
            p-4
            mb-6
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            "
            onChange={(e) =>
                setForm({
                ...form,
                password: e.target.value
                })
            }

            onKeyDown={(e) => {
                if (e.key === "Enter") {
                handleRegister();
                }
            }}
        />

        <button
          onClick={handleRegister}
          className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            font-bold
            hover:scale-[1.03]
            transition-all
            duration-300
            shadow-lg
            shadow-pink-500/20
            "
        >
          Register
        </button>

        <p className="text-center mt-5 text-slate-400">

        Already have an account?

        <span
            onClick={() => navigate("/login")}
            className="text-cyan-400 cursor-pointer ml-2"
        >
            Login
        </span>

        </p>

      </div>

    </div>
  );
}

export default Register;