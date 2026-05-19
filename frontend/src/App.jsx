import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Complaints from "./pages/Complaints";
import Categories from "./pages/Categories";
import AIAnalysis from "./pages/AIAnalysis";
import InterviewAssistant from "./pages/InterviewAssistant";

import { Toaster } from "react-hot-toast";

function App() {

  const token =
  sessionStorage.getItem("token");

  return (

    <BrowserRouter>

      <Toaster />

      <Routes>

        {/* DEFAULT ROUTE */}

        <Route
          path="/"
          element={
            token
            ? <Navigate to="/dashboard" />
            : <Navigate to="/register" />
          }
        />

        {/* AUTH ROUTES */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            token
            ? <Dashboard />
            : <Navigate to="/login" />
          }
        />

        {/* COMPLAINTS */}

        <Route
          path="/dashboard/complaints"
          element={
            token
            ? <Complaints />
            : <Navigate to="/login" />
          }
        />

        {/* CATEGORIES */}

        <Route
          path="/dashboard/categories"
          element={
            token
            ? <Categories />
            : <Navigate to="/login" />
          }
        />

        {/* AI ANALYSIS */}

        <Route
          path="/dashboard/ai-analysis"
          element={
            token
            ? <AIAnalysis />
            : <Navigate to="/login" />
          }
        />

        {/* AI ASSISTANT */}

        <Route
          path="/dashboard/interview-assistant"
          element={
            token
            ? <InterviewAssistant />
            : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;