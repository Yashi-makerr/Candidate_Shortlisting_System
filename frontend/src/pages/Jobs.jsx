import DashboardLayout from "../layouts/DashboardLayout";

function Jobs() {

  const jobs = [

    {
      title: "Frontend Developer",
      company: "TechNova",
      skills: ["React", "Tailwind"]
    },

    {
      title: "Backend Developer",
      company: "CloudSync",
      skills: ["Node.js", "MongoDB"]
    },

    {
      title: "AI Engineer",
      company: "NeuroLabs",
      skills: ["Python", "TensorFlow"]
    }

  ];

  return (

    <div>

      <h1 className="
      text-4xl
      font-bold
      mb-8
      ">

        Open Jobs

      </h1>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
      ">

        {
          jobs.map((job, index) => (

            <div
              key={index}
              className="
              glass
              p-6
              rounded-2xl
              "
            >

              <h2 className="
              text-2xl
              font-bold
              mb-2
              ">

                {job.title}

              </h2>

              <p className="
              text-slate-400
              mb-4
              ">

                {job.company}

              </p>

              <div className="
              flex
              flex-wrap
              gap-2
              ">

                {
                  job.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                      bg-slate-800
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      "
                    >

                      {skill}

                    </span>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Jobs;