import DashboardLayout from "../layouts/DashboardLayout";

function AIRanking() {

  return (

    <div>

      <h1 className="
      text-4xl
      font-bold
      mb-8
      ">

        AI Candidate Ranking

      </h1>

      <div className="
      glass
      p-8
      rounded-2xl
      ">

        <h2 className="
        text-2xl
        font-bold
        mb-4
        text-cyan-400
        ">

          AI Insights

        </h2>

        <ul className="
        space-y-4
        text-slate-300
        ">

          <li>
            ✅ React developers are most in demand
          </li>

          <li>
            ✅ Cloud + Node.js candidates have highest match score
          </li>

          <li>
            ✅ AI recommends prioritizing candidates with AWS knowledge
          </li>

          <li>
            ✅ Full stack developers show strongest hiring potential
          </li>

        </ul>

      </div>

    </div>
  );
}

export default AIRanking;