"use client";

import { useEffect, useState } from "react";

export default function OrganizerDashboard() {
  const [competition, setCompetition] = useState(null);
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    const savedCompetition =
      localStorage.getItem("zenithCompetition");

    const savedRounds =
      localStorage.getItem("zenithRounds");

    if (savedCompetition) {
      setCompetition(JSON.parse(savedCompetition));
    }

    if (savedRounds) {
      setRounds(JSON.parse(savedRounds));
    }
  }, []);

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

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Organizer Dashboard
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Competition Control
          </h1>

          <p className="mt-4 text-gray-400">
            Manage your competition from one place.
          </p>


          {/* COMPETITION */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            {competition ? (

              <>

                <div className="flex flex-col justify-between gap-6 md:flex-row">

                  <div>

                    <p className="text-sm text-cyan-400">
                      COMPETITION
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                      {competition.name}
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                      {competition.description}
                    </p>

                  </div>


                  <div className="flex gap-3">

                    <span className="h-fit rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-400">
                      {competition.mode}
                    </span>

                    <span className="h-fit rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                      {competition.teamSize}
                    </span>

                  </div>

                </div>


                {/* STATS */}

                <div className="mt-10 grid gap-4 sm:grid-cols-3">

                  <Stat
                    label="Rounds"
                    value={rounds.length}
                  />

                  <Stat
                    label="Participants"
                    value="0"
                  />

                  <Stat
                    label="Status"
                    value="DRAFT"
                  />

                </div>

              </>

            ) : (

              <div>

                <h2 className="text-2xl font-bold">
                  No Competition Found
                </h2>

                <p className="mt-3 text-gray-500">
                  Create a competition first.
                </p>

                <a
                  href="/organizer/create"
                  className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black"
                >
                  Create Competition
                </a>

              </div>

            )}

          </div>


          {/* ROUNDS */}

          <div className="mt-8">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  COMPETITION STRUCTURE
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Rounds
                </h2>

              </div>

              <a
                href="/organizer/create/rounds"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Edit Rounds
              </a>

            </div>


            {rounds.length > 0 ? (

              <div className="mt-6 space-y-4">

                {rounds.map((round, index) => (

                  <div
                    key={round.id}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >

                    <div className="flex items-center gap-5">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 font-mono text-sm text-cyan-400">
                        0{index + 1}
                      </div>

                      <div>

                        <h3 className="font-bold">
                          {round.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {round.description}
                        </p>

                      </div>

                    </div>


                    {round.id === "buzzer" && (
                      <span className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400 sm:block">
                        LIVE
                      </span>
                    )}

                  </div>

                ))}

              </div>

            ) : (

              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">

                <p className="text-gray-500">
                  No rounds configured yet.
                </p>

                <a
                  href="/organizer/create/rounds"
                  className="mt-4 inline-block text-cyan-400 hover:underline"
                >
                  Add rounds →
                </a>

              </div>

            )}

          </div>


          {/* ACTIONS */}

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <DashboardAction
              title="Manage Questions"
              description="Add questions to your competition rounds."
            />

            <DashboardAction
              title="Manage Teams"
              description="View registered teams and participants."
            />

            <DashboardAction
              title="Launch Competition"
              description="Start the live competition when ready."
            />

          </div>

        </div>

      </section>

    </main>
  );
}


/* STAT */

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-5">

      <p className="text-xs uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="mt-3 text-2xl font-bold">
        {value}
      </p>

    </div>
  );
}


/* DASHBOARD ACTION */

function DashboardAction({ title, description }) {
  return (
    <button
      type="button"
      onClick={() => alert(`${title} will be built next.`)}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:border-cyan-400/40"
    >

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>

    </button>
  );
}