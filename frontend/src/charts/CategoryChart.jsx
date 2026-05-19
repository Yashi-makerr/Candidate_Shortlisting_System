import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f59e0b",
  "#ef4444",
  "#22c55e"
];

function SkillsChart({ data }) {

  const skillCount = {};

  data.forEach((candidate) => {

    candidate.skills.forEach((skill) => {

      const cleanSkill =
      skill.trim();

      if (skillCount[cleanSkill]) {

        skillCount[cleanSkill]++;

      } else {

        skillCount[cleanSkill] = 1;
      }

    });

  });

  // SORT SKILLS
  const sortedSkills =
  Object.entries(skillCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const chartData =
  sortedSkills.map(([skill, count]) => ({
    name: skill,
    value: count
  }));

  return (

    <div className="
    glass
    p-6
    rounded-2xl
    mt-10
    ">

      <h2 className="
      text-2xl
      font-bold
      mb-6
      ">

        Top Skills Distribution

      </h2>

      <div className="h-[400px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={50}
              paddingAngle={3}
              dataKey="value"
              label
            >

              {
                chartData.map(
                  (_, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />

                  )
                )
              }

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SkillsChart;