import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {

  return (

    <div className="
    flex
    min-h-screen
    bg-gradient-to-br
    from-slate-950
    via-blue-950
    to-slate-950
    text-white
    ">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <main className="
      flex-1
      p-8
      overflow-y-auto
      ">

        {children}

      </main>

    </div>
  );
}

export default DashboardLayout;