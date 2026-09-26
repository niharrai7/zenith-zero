"use client";

import { useState } from "react";

export default function CreateCompetition() {
  const [competitionName, setCompetitionName] = useState("");
  const [description, setDescription] = useState("");
  const [teamSize, setTeamSize] = useState("2 - 4");
  const [mode, setMode] = useState("Online");

  const handleCreate = (event) => {
    event.preventDefault();

    if (!competitionName || !description) {
      alert("Please fill all required fields.");
      return;
    }

    const competition = {
      name: competitionName,
      description: description,
      teamSize: teamSize,
      mode: mode,
    };

    localStorage.setItem(
      "zenithCompetition",
      JSON.stringify(competition)
    );

    alert("Competition details saved!");
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
          href="/events"
          className="text-sm text-gray-400 transition hover:text-cyan-400"
        >
          Events
        </a>

      </nav>


      {/* HEADER */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Organizer
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Create Competition
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Set up your competition before adding rounds,
            questions, teams and scoring.
          </p>


          {/* FORM */}

          <form
            onSubmit={handleCreate}
            className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >

            {/* NAME */}

            <div>

              <label className="text-sm text-gray-400">
                Competition Name *
              </label>

              <input
                type="text"
                value={competitionName}
                onChange={(e) =>
                  setCompetitionName(e.target.value)
                }
                placeholder="Example: Zenith Tech Challenge"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />

            </div>


            {/* DESCRIPTION */}

            <div className="mt-6">

              <label className="text-sm text-gray-400">
                Description *
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe your competition..."
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
              />

            </div>


            {/* TEAM SIZE */}

            <div className="mt-6">

              <label className="text-sm text-gray-400">
                Team Size
              </label>

              <select
                value={teamSize}
                onChange={(e) =>
                  setTeamSize(e.target.value)
                }
                className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none focus:border-cyan-400"
              >

                <option>Individual</option>
                <option>2 Members</option>
                <option>2 - 4</option>
                <option>3 - 5</option>
                <option>4 - 6</option>

              </select>

            </div>


            {/* MODE */}

            <div className="mt-6">

              <label className="text-sm text-gray-400">
                Competition Mode
              </label>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">

                <button
                  type="button"
                  onClick={() => setMode("Online")}
                  className={`rounded-xl border p-4 text-left transition ${
                    mode === "Online"
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-white/10 text-gray-400 hover:border-white/30"
                  }`}
                >
                  <p className="font-bold">
                    Online
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Participants compete remotely.
                  </p>
                </button>


                <button
                  type="button"
                  onClick={() => setMode("Offline")}
                  className={`rounded-xl border p-4 text-left transition ${
                    mode === "Offline"
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                      : "border-white/10 text-gray-400 hover:border-white/30"
                  }`}
                >
                  <p className="font-bold">
                    Offline
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Participants compete at a venue.
                  </p>
                </button>

              </div>

            </div>


            {/* CREATE */}

            <button
              type="submit"
              className="mt-10 w-full rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300"
            >
              Save Competition
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}