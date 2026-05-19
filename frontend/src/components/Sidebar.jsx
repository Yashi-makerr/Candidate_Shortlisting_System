import {
  Users,
  Brain,
  Briefcase,
  LayoutDashboard,
  LogOut,
  MessageSquare
} from "lucide-react";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const location = useLocation();

  const logout = () => {

    sessionStorage.removeItem("token");

    navigate("/register");

    window.location.reload();
  };

  const menuClass = (path) => {

    return `
    flex
    items-center
    gap-3
    p-4
    rounded-xl
    cursor-pointer
    transition-all
    duration-300

    ${
      location.pathname === path
      ? "bg-cyan-500/20 text-cyan-400 shadow-lg"
      : "hover:bg-slate-800 text-slate-300"
    }
    `;
  };

  return (

    <div className="
    w-64
    min-h-screen
    border-r
    border-slate-800
    p-6
    bg-slate-950/70
    backdrop-blur-xl
    sticky
    top-0
    ">

      {/* LOGO */}

      <div
        onClick={() => navigate("/dashboard")}
        className="cursor-pointer"
      >

        <h1 className="
        text-3xl
        font-bold
        text-cyan-400
        mb-12
        ">

          AI Complaint System

        </h1>

      </div>

      {/* MENU */}

      <div className="space-y-3">

        {/* DASHBOARD */}

        <div
          onClick={() =>
            navigate("/dashboard")
          }
          className={
            menuClass("/dashboard")
          }
        >

          <LayoutDashboard size={20} />

          Dashboard

        </div>

        {/* CANDIDATES */}

        <div
          onClick={() =>
            navigate(
              "/dashboard/complaints"
            )
          }
          className={
            menuClass(
              "/dashboard/complaints"
            )
          }
        >

          <Users size={20} />

          Complaints

        </div>

        {/* JOBS */}

        <div
          onClick={() =>
            navigate(
              "/dashboard/categories"
            )
          }
          className={
            menuClass(
              "/dashboard/categories"
            )
          }
        >

          <Briefcase size={20} />

          Categories

        </div>

        {/* AI RANKING */}

        <div
          onClick={() =>
            navigate(
              "/dashboard/ai-analysis"
            )
          }
          className={
            menuClass(
              "/dashboard/ai-analysis"
            )
          }
        >

          <Brain size={20} />

          AI Analysis

        </div>

        <div
          onClick={() =>
            navigate(
              "/dashboard/interview-assistant"
            )
          }
          className={
            menuClass(
              "/dashboard/interview-assistant"
            )
          }
        >

          <MessageSquare size={20} />

          Complaint Assistant

        </div>

        {/* LOGOUT */}

        <div
          onClick={logout}
          className="
          flex
          items-center
          gap-3
          p-4
          rounded-xl
          hover:bg-red-500/20
          cursor-pointer
          transition-all
          duration-300
          mt-10
          text-red-400
          "
        >

          <LogOut size={20} />

          Logout

        </div>

      </div>

    </div>
  );
}

export default Sidebar;