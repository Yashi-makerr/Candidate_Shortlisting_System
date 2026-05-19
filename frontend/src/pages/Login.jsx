import { useState } from "react";

import API from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogin = async () => {

  try {

    const response =
    await API.post(
      "/auth/login",
      form
    );

    sessionStorage.setItem(
    "token",
    response.data.token
    );

    toast.success(
      "Login Successful"
    );

    navigate("/dashboard");
    window.location.reload();

  } catch (error) {

    toast.error(
      "Invalid Credentials"
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

          User Login

        </h1>

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
            handleLogin();
            }
        }}
        />

        <button
          onClick={handleLogin}
          className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            font-bold
            hover:scale-[1.03]
            transition-all
            duration-300
            shadow-lg
            shadow-cyan-500/20
            "
        >
          Login
        </button>
         <p className="text-center mt-5 text-slate-400">

        Don't have an account?

        <span
            onClick={() => navigate("/register")}
            className="text-cyan-400 cursor-pointer ml-2"
        >
            Register
        </span>

        </p>

      </div>

    </div>
  );
}

export default Login;