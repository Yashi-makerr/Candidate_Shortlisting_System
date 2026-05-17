const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const candidateRoutes = require("./routes/candidateRoutes");
const matchRoutes = require("./routes/matchRoutes");
const aiRoutes = require("./routes/aiRoutes");
const shortlistRoutes = require("./routes/shortlistRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();


// CORS
app.use(
  cors({
    origin:
      "https://candidate-shortlisting-frontend-h3w2.onrender.com",
    credentials: true
  })
);


// BODY PARSER
app.use(express.json());


// HOME ROUTE
app.get("/", (req, res) => {
  res.send("AI Candidate Shortlisting Backend Running");
});


// API ROUTES
app.use("/api/candidates", candidateRoutes);

app.use("/api/match", matchRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/shortlist", shortlistRoutes);

app.use("/api/interview", interviewRoutes);

app.use("/api/auth", authRoutes);


// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});