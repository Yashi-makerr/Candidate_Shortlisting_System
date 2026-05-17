import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Candidates from "./pages/Candidates";
import Jobs from "./pages/Jobs";
import AIRanking from "./pages/AIRanking";
import InterviewAssistant from "./pages/InterviewAssistant";

import { Toaster } from "react-hot-toast";

function App() {

  const token =sessionStorage.getItem("token");

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

        {/* PROTECTED DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            token
            ? <Dashboard />
            : <Navigate to="/login" />
          }
        />

        <Route
        path="/dashboard/candidates"
        element={
          token
          ? <Candidates />
          : <Navigate to="/login" />
        }
      />

      <Route
        path="/dashboard/jobs"
        element={
          token
          ? <Jobs />
          : <Navigate to="/login" />
        }
      />

      <Route
        path="/dashboard/ai-ranking"
        element={
          token
          ? <AIRanking />
          : <Navigate to="/login" />
        }
      />
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