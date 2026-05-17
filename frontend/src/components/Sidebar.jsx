import {
  Users,
  Brain,
  Briefcase,
  LogOut
} from "lucide-react";

function Sidebar() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href =
    "/login";
  };

  return (

    <div className="
    w-64
    border-r
    border-slate-800
    p-6
    bg-slate-950/70
    backdrop-blur-xl
    ">

      <h1 className="
      text-3xl
      font-bold
      text-cyan-400
      mb-10
      ">

        AI Recruiter

      </h1>

      <div className="space-y-4">

        <div className="
        flex
        items-center
        gap-3
        p-3
        rounded-xl
        hover:bg-slate-800
        cursor-pointer
        transition-all
        ">

          <Users size={20} />

          Candidates

        </div>

        <div className="
        flex
        items-center
        gap-3
        p-3
        rounded-xl
        hover:bg-slate-800
        cursor-pointer
        transition-all
        ">

          <Briefcase size={20} />

          Jobs

        </div>

        <div className="
        flex
        items-center
        gap-3
        p-3
        rounded-xl
        hover:bg-slate-800
        cursor-pointer
        transition-all
        ">

          <Brain size={20} />

          AI Ranking

        </div>

        <div
          onClick={logout}
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          hover:bg-red-500/20
          cursor-pointer
          transition-all
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