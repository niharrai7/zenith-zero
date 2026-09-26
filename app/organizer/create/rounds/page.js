"use client";

import { useState } from "react";
import Link from "next/link";

const initialRounds = [
  {
    id: 1,
    name: "Qualification",
    type: "Quiz",
    duration: "30 min",
    questions: "20",
    status: "READY",
  },
  {
    id: 2,
    name: "Semi Final",
    type: "Technical",
    duration: "45 min",
    questions: "15",
    status: "DRAFT",
  },
];

export default function RoundsPage() {
  const [rounds, setRounds] = useState(initialRounds);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("Quiz");
  const [duration, setDuration] = useState("30");
  const [questions, setQuestions] = useState("20");

  function addRound(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Enter a round name.");
      return;
    }

    const newRound = {
      id: Date.now(),
      name: name.trim(),
      type,
      duration: `${duration} min`,
      questions,
      status: "DRAFT",
    };

    setRounds([...rounds, newRound]);
    setName("");
    setType("Quiz");
    setDuration("30");
    setQuestions("20");
    setShowForm(false);
  }

  function deleteRound(id) {
    setRounds(rounds.filter((round) => round.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <Link
            href="/organizer"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Dashboard
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Competition Setup
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Manage Rounds
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
              Build the competition structure and decide how participants
              progress through each stage.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="w-fit rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
          >
            {showForm ? "Close Form" : "+ Add Round"}
          </button>
        </div>

        {/* Event Summary */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Current Event
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Zenith Quiz Arena
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Live Competition · 2 - 4 members
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Stat label="Rounds" value={rounds.length} />
              <Stat label="Status" value="Draft" />
            </div>
          </div>
        </div>

        {/* Add Round Form */}
        {showForm && (
          <form
            onSubmit={addRound}
            className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
              New Round
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Configure Round
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-white/60">
                  Round Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Final Round"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none placeholder:text-white/20 focus:border-white/30"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Round Type
                </label>

                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm outline-none focus:border-white/30"
                >
                  <option>Quiz</option>
                  <option>Technical</option>
                  <option>Coding</option>
                  <option>Cyber Security</option>
                  <option>Rapid Fire</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Duration
                </label>

                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Questions
                </label>

                <input
                  type="number"
                  min="1"
                  value={questions}
                  onChange={(e) => setQuestions(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none focus:border-white/30"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Add Round
              </button>
            </div>
          </form>
        )}

        {/* Round List */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Competition Rounds
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Participants will progress through these stages.
              </p>
            </div>

            <span className="text-xs text-white/25">
              {rounds.length} configured
            </span>
          </div>

          <div className="space-y-4">
            {rounds.map((round, index) => (
              <div
                key={round.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-black">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold">
                          {round.name}
                        </h3>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[8px] font-bold tracking-widest ${
                            round.status === "READY"
                              ? "border-green-400/20 bg-green-400/5 text-green-400"
                              : "border-white/10 text-white/30"
                          }`}
                        >
                          {round.status}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-white/35">
                        {round.type} round
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <Info
                      label="Duration"
                      value={round.duration}
                    />

                    <Info
                      label="Questions"
                      value={round.questions}
                    />

                    <button
                      onClick={() => deleteRound(round.id)}
                      className="text-xs font-semibold text-red-400/60 transition hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {rounds.length === 0 && (
              <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center">
                <p className="text-sm text-white/30">
                  No rounds configured yet.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/organizer"
            className="rounded-2xl border border-white/10 px-6 py-3.5 text-center text-sm font-semibold text-white/60 transition hover:border-white/20 hover:text-white"
          >
            Back to Dashboard
          </Link>

          <button
            onClick={() =>
              alert(`${rounds.length} rounds saved successfully.`)
            }
            className="rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
          >
            Save Competition Structure →
          </button>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="hidden sm:block">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-white/70">
        {value}
      </p>
    </div>
  );
}