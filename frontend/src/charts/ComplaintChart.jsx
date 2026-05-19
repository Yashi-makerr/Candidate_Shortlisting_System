import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";

function MatchChart({ data }) {

  return (
    <div className="glass p-6 rounded-2xl h-[400px] mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Match Analytics
      </h2>

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="matchScore" fill="#06b6d4" radius={[10,10,0,0]} />
        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default MatchChart;