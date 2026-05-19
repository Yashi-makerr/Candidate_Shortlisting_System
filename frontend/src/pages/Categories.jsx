import DashboardLayout
from "../layouts/DashboardLayout";

function Categories() {

  const categories = [

  "Water Supply",
  "Electricity",
  "Road Damage",
  "Garbage",
  "Drainage",
  "Street Light",
  "Internet Issue",
  "Traffic Problem",
  "Noise Pollution",
  "Illegal Parking",
  "Public Transport",
  "Medical Emergency",
  "Sewage Problem",
  "Air Pollution",
  "Cyber Crime",
  "Women Safety",
  "Animal Complaint",
  "Park Maintenance"

];

  return (

    <DashboardLayout>

      <h1 className="
      text-4xl
      font-bold
      text-cyan-400
      mb-10
      ">

        Complaint Categories

      </h1>

      <div className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      ">

        {
          categories.map(
            (category, index) => (

            <div
              key={index}
              className="
              glass
              p-8
              rounded-2xl
              text-center
              text-xl
              font-bold
              "
            >

              {category}

            </div>

          ))
        }

      </div>

    </DashboardLayout>

  );
}

export default Categories;