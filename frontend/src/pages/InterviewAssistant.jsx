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
          message:question
        }
      );

      setAnswer(
        response.data.reply
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <DashboardLayout>

      <div className="
      max-w-4xl
      mx-auto
      ">

        <h1 className="
        text-4xl
        font-bold
        mb-3
        ">

          AI Interview Assistant

        </h1>

        <p className="
        text-slate-400
        mb-8
        ">

          Ask any interview question
          and get AI-powered answers.

        </p>

        {/* INPUT */}

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
Ask anything...
Example:
What is React?
Explain Node.js event loop.
Tell me HR interview tips.
"
            className="
            w-full
            h-40
            p-4
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            outline-none
            "
          />

          <button
            onClick={askAI}
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
            "
          >

            {
              loading
              ? "Thinking..."
              : "Ask AI"
            }

          </button>

        </div>

        {/* ANSWER */}

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
            ">

              {answer}

            </div>

          )
        }

      </div>

    </DashboardLayout>
  );
}

export default InterviewAssistant;