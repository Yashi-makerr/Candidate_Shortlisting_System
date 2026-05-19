const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const complaintRoutes =
require("./routes/complaintRoutes");

const analysisRoutes =
require("./routes/analysisRoutes");

const authRoutes =
require("./routes/authRoutes");

const app = express();


// CORS

app.use(

  cors({

    origin: [

      "http://localhost:5173",

      "https://candidate-shortlisting-frontend-h3w2.onrender.com"

    ],

    credentials: true

  })

);


// BODY PARSER

app.use(express.json());


// HOME ROUTE

app.get("/", (req, res) => {

  res.send(
    "AI Complaint Management Backend Running"
  );

});


// ROUTES

app.use(
  "/api/complaints",
  complaintRoutes
);

app.use(
  "/api/ai",
  analysisRoutes
);

app.use(
  "/api/auth",
  authRoutes
);


// MONGODB CONNECTION

mongoose
.connect(process.env.MONGO_URI)

.then(() => {

  console.log(
    "MongoDB Connected"
  );

})

.catch((err) => {

  console.log(err);

});


// SERVER

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});