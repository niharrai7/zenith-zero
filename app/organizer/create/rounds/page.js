"use client";

import { useState } from "react";

const roundTypes = [
  {
    id: "quiz",
    name: "MCQ Quiz",
    description: "Multiple-choice questions with timed answers.",
  },
  {
    id: "rapid-fire",
    name: "Rapid Fire",
    description: "Fast questions with a short response window.",
  },
  {
    id: "buzzer",
    name: "Buzzer Round",
    description: "Teams compete to buzz first and answer live.",
  },
  {
    id: "coding",
    name: "Coding Round",
    description: "Solve programming problems within a time limit.",
  },
  {
    id: "treasure",
    name: "Treasure Hunt",
    description: "Solve clues and progress through multiple stages.",
  },
  {
    id: "custom",
    name: "Custom Round",
    description: "Create your own competition round format.",
  },
];

export default function CompetitionRounds() {
  const [selectedRounds, setSelectedRounds] = useState([]);

  const toggleRound = (roundId) => {
    if (selectedRounds.includes(roundId)) {
      setSelectedRounds(
        selectedRounds.filter((id) => id !== roundId)
      );
    } else {
      setSelectedRounds([
        ...selectedRounds,
        roundId,
      ]);
    }
  };

  const saveRounds = () => {
    if (selectedRounds.length === 0) {
      alert("Please select at least one round.");
      return;
    }

    const rounds = roundTypes.filter((round) =>
      selectedRounds.includes(round.id)
    );

    localStorage.setItem(
      "zenithRounds",
      JSON.stringify(rounds)
    );

    alert("Rounds saved successfully!");
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-6">

        <a
          href="/"
          className="text-2xl font-bold tracking-wider"
        >
          ZENITH<span className="text-cyan-400">ZERO</span>
        </a>

        <a
          href="/organizer/create"
          className="text-sm text-gray-400 transition hover:text-cyan-400"
        >
          ← Competition Details
        </a>

      </nav>


      {/* HEADER */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Competition Setup
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Choose Your Rounds
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Select the rounds that participants will play
            in your competition.
          </p>


          {/* ROUND CARDS */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {roundTypes.map((round, index) => {

              const selected =
                selectedRounds.includes(round.id);

              return (
                <button
                  key={round.id}
                  type="button"
                  onClick={() => toggleRound(round.id)}
                  className={`text-left rounded-3xl border p-6 transition ${
                    selected
                      ? "border-cyan-400 bg-cyan-400/[0.08]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30"
                  }`}
                >

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm ${
                          selected
                            ? "bg-cyan-400 text-black"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        0{index + 1}
                      </div>

                      <h2 className="text-xl font-bold">
                        {round.name}
                      </h2>

                    </div>


                    <div
                      className={`h-5 w-5 rounded-full border ${
                        selected
                          ? "border-cyan-400 bg-cyan-400"
                          : "border-white/30"
                      }`}
                    />

                  </div>


                  <p className="mt-5 pl-14 text-sm leading-6 text-gray-500">
                    {round.description}
                  </p>


                  {round.id === "buzzer" && (
                    <div className="mt-5 ml-14 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                      Live Buzzer System
                    </div>
                  )}

                </button>
              );
            })}

          </div>


          {/* SELECTED */}

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  SELECTED ROUNDS
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {selectedRounds.length}
                </p>

              </div>

              <button
                type="button"
                onClick={saveRounds}
                className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-black transition hover:bg-cyan-300"
              >
                Save Rounds
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}