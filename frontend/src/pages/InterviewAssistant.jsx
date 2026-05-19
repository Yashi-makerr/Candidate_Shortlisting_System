import { useState } from "react";

import API from "../services/api";

import DashboardLayout
from "../layouts/DashboardLayout";

function InterviewAssistant() {

  const [question, setQuestion] =
  useState("");

  const [answer, setAnswer] =
  useState("");

  const [loading, setLoading] =
  useState(false);

  const askAI = async () => {

    if (!question) return;

    try {

      setLoading(true);

      const response =
      await API.post(

        "/ai/interview-chat",

        {
          message: question
        }

      );

      setAnswer(
        response.data.reply
      );

    } catch (error) {

      console.log(error);

      setAnswer(
        "AI Assistant is currently unavailable."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <DashboardLayout>

      <div className="
      max-w-5xl
      mx-auto
      ">

        {/* TITLE */}

        <h1 className="
        text-5xl
        font-bold
        mb-3
        text-cyan-400
        ">

          AI Complaint Assistant

        </h1>

        <p className="
        text-slate-400
        mb-8
        text-lg
        ">

          Ask AI about complaints,
          departments, urgency,
          public issues, reporting process
          and complaint solutions.

        </p>

        {/* AI INPUT BOX */}

        <div className="
        glass
        p-6
        rounded-2xl
        ">

          <textarea

            value={question}

            onChange={(e) =>
              setQuestion(e.target.value)
            }

            placeholder="
Examples:
• Water leakage near highway
• Electricity outage in Muradnagar
• How to report garbage issue?
• Complaint about broken road
• Drain blockage issue
• Women safety complaint
"

            className="
            w-full
            h-44
            p-5
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            outline-none
            text-white
            resize-none
            "

          />

          <button

            onClick={askAI}

            disabled={loading}

            className="
            mt-5
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            font-bold
            hover:scale-105
            transition-all
            disabled:opacity-50
            "

          >

            {
              loading
              ? "Analyzing..."
              : "Ask AI Assistant"
            }

          </button>

        </div>

        {/* AI RESPONSE */}

        {
          answer && (

            <div className="
            glass
            p-6
            rounded-2xl
            mt-8
            whitespace-pre-wrap
            leading-8
            text-slate-300
            border
            border-cyan-500/20
            ">

              <h2 className="
              text-2xl
              font-bold
              mb-4
              text-cyan-400
              ">

                AI Response

              </h2>

              {answer}

            </div>

          )
        }

      </div>

    </DashboardLayout>
  );
}

export default InterviewAssistant;