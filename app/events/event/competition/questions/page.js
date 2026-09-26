"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User",
    ],
  },
  {
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
  },
  {
    question: "Which protocol is used for secure web communication?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Application Process Internet",
      "Automated Programming Instruction",
    ],
  },
  {
    question: "Which Git command creates a new branch?",
    options: ["git push", "git merge", "git branch", "git clone"],
  },
  {
    question: "Which framework is used to build this Zenith Zero application?",
    options: ["Django", "Next.js", "Spring", "Laravel"],
  },
  {
    question: "Which symbol is commonly used for a JavaScript arrow function?",
    options: ["=>", "->", "::", "==>"],
  },
];

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [seconds, setSeconds] = useState(30 * 60);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted || seconds <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, submitted]);

  useEffect(() => {
    if (seconds === 0 && !submitted) {
      setSubmitted(true);
    }
  }, [seconds, submitted]);

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  const answeredCount = Object.keys(answers).length;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  function selectAnswer(option) {
    setAnswers((current) => ({
      ...current,
      [currentQuestion]: option,
    }));
  }

  function goNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((current) => current + 1);
    }
  }

  function goPrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion((current) => current - 1);
    }
  }

  function submitCompetition() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <nav className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
            <Link href="/" className="text-xl font-black tracking-tight">
              ZENITH<span className="text-white/40">ZERO</span>
            </Link>

            <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
              ROUND SUBMITTED
            </span>
          </div>
        </nav>

        <section className="mx-auto flex min-h-[75vh] max-w-3xl items-center justify-center px-5 py-12">
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-400/20 bg-green-400/5 text-3xl">
              ✓
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-green-400">
              Submission Complete
            </p>

            <h1 className="mt-4 text-4xl font-black sm:text-5xl">
              Round Submitted
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
              Your team&apos;s answers have been recorded successfully.
              Results will be available once the round has been evaluated.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ResultBox label="Questions" value={`${questions.length}`} />
              <ResultBox label="Answered" value={`${answeredCount}`} />
              <ResultBox label="Round" value="01 / 03" />
            </div>

            <Link
              href="/events/event/team"
              className="mt-8 inline-block rounded-2xl bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Return to Team Lobby →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#050505]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Zenith Quiz Arena
            </span>

            <span className="h-4 w-px bg-white/10" />

            <span className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Round 01 / 03
            </span>
          </div>

          <div
            className={`rounded-xl border px-4 py-2 ${
              seconds <= 60
                ? "border-red-400/30 bg-red-400/10 text-red-400"
                : "border-white/10 bg-white/[0.03] text-white"
            }`}
          >
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/30">
              Time Left
            </p>

            <p className="font-mono text-lg font-black">{formattedTime}</p>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-10">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-400">
              Live Competition
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-4xl">
              Qualification Round
            </h1>

            <p className="mt-2 text-sm text-white/35">
              Select one answer for each question.
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Progress
            </p>

            <p className="mt-1 text-sm font-bold">
              {answeredCount} / {questions.length} Answered
            </p>
          </div>
        </div>

        <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-green-400 transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white/40">
                Question {String(currentQuestion + 1).padStart(2, "0")}
              </span>

              <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">
                1 Point
              </span>
            </div>

            <h2 className="mt-8 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
              {question.question}
            </h2>

            <div className="mt-8 grid gap-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option;

                return (
                  <button
                    key={option}
                    onClick={() => selectAnswer(option)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                      isSelected
                        ? "border-green-400/40 bg-green-400/10"
                        : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-black ${
                        isSelected
                          ? "border-green-400/40 bg-green-400/10 text-green-400"
                          : "border-white/10 text-white/30"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span
                      className={`text-sm font-semibold ${
                        isSelected ? "text-white" : "text-white/60"
                      }`}
                    >
                      {option}
                    </span>

                    {isSelected && (
                      <span className="ml-auto text-sm font-black text-green-400">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                onClick={goPrevious}
                disabled={currentQuestion === 0}
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/50 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-20"
              >
                ← Previous
              </button>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={submitCompetition}
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Submit Round ✓
                </button>
              ) : (
                <button
                  onClick={goNext}
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Next Question →
                </button>
              )}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Questions
              </p>

              <p className="text-[10px] font-bold text-white/20">
                {answeredCount}/{questions.length}
              </p>
            </div>

            <div className="mt-5 grid grid-cols-5 gap-2">
              {questions.map((_, index) => {
                const answered = answers[index] !== undefined;
                const active = currentQuestion === index;

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`flex h-10 items-center justify-center rounded-xl border text-xs font-bold transition ${
                      active
                        ? "border-white bg-white text-black"
                        : answered
                        ? "border-green-400/30 bg-green-400/10 text-green-400"
                        : "border-white/10 bg-black/20 text-white/30 hover:border-white/20"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
              <Legend color="bg-white" label="Current" />
              <Legend color="bg-green-400" label="Answered" />
              <Legend color="bg-white/10" label="Not answered" />
            </div>

            <div className="mt-7 rounded-2xl border border-yellow-400/10 bg-yellow-400/5 p-4">
              <p className="text-[9px] font-bold uppercase tracking-widest text-yellow-400/70">
                Important
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Your answers are saved automatically. You can move between
                questions before submitting the round.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ResultBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      <span className="text-[10px] font-medium text-white/35">{label}</span>
    </div>
  );
}