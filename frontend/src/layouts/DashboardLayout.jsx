import { Briefcase, Users, Brain } from "lucide-react";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen gradient-bg text-white">

      <aside className="w-64 p-6 border-r border-slate-800">
        <h1 className="text-2xl font-bold mb-10">
          AI Recruiter
        </h1>

        <div className="space-y-4">
          <button className="flex items-center gap-3 hover:text-cyan-400">
            <Users size={20} />
            Candidates
          </button>

          <button className="flex items-center gap-3 hover:text-cyan-400">
            <Briefcase size={20} />
            Jobs
          </button>

          <button className="flex items-center gap-3 hover:text-cyan-400">
            <Brain size={20} />
            AI Ranking
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;