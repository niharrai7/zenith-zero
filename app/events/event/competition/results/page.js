"use client";

import Link from "next/link";

const performance = [
  { label: "Questions", value: "20" },
  { label: "Answered", value: "18" },
  { label: "Correct", value: "16" },
  { label: "Score", value: "80" },
];

const breakdown = [
  {
    round: "Round 01",
    title: "Qualification",
    score: "80 / 100",
    status: "Completed",
  },
  {
    round: "Round 02",
    title: "Speed Challenge",
    score: "Pending",
    status: "Locked",
  },
  {
    round: "Round 03",
    title: "Final Challenge",
    score: "Pending",
    status: "Locked",
  },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
            RESULTS
          </span>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-green-400">
            Round 01 Completed
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Round Results
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/35">
            Your qualification round has been evaluated. Here is the current
            performance summary for your team.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 text-center sm:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-3xl font-black text-green-400">
            80
          </div>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
            Total Score
          </p>

          <h2 className="mt-2 text-3xl font-black">Zenith Zero</h2>

          <p className="mt-2 text-xs text-white/30">
            Qualification Round · 16 correct answers
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {performance.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
                {item.label}
              </p>

              <p className="mt-2 text-2xl font-black">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25">
              Competition Progress
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Round Breakdown
            </h2>
          </div>

          <div className="space-y-3">
            {breakdown.map((item, index) => (
              <div
                key={item.round}
                className={`flex flex-col gap-5 rounded-3xl border p-5 sm:flex-row sm:items-center sm:justify-between ${
                  index === 0
                    ? "border-green-400/20 bg-green-400/[0.04]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-black ${
                      index === 0
                        ? "border-green-400/20 bg-green-400/10 text-green-400"
                        : "border-white/10 bg-black/20 text-white/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
                      {item.round}
                    </p>

                    <h3 className="mt-1 font-bold">{item.title}</h3>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <div className="text-left sm:text-right">
                    <p className="text-[9px] uppercase tracking-widest text-white/20">
                      Score
                    </p>

                    <p className="mt-1 text-sm font-black">{item.score}</p>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest ${
                      item.status === "Completed"
                        ? "border-green-400/20 bg-green-400/10 text-green-400"
                        : "border-white/10 bg-white/[0.03] text-white/25"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Current Position
            </p>

            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="text-3xl font-black">#3</p>
                <p className="mt-1 text-xs text-white/30">
                  Live leaderboard position
                </p>
              </div>

              <span className="text-2xl">↑</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Next Round
            </p>

            <h3 className="mt-3 text-xl font-black">
              Speed Challenge
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/30">
              Wait for the organizer to open the next round.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/events/event/competition/leaderboard"
            className="rounded-xl bg-white px-7 py-3.5 text-center text-sm font-bold text-black transition hover:bg-white/90"
          >
            View Live Leaderboard →
          </Link>

          <Link
            href="/events/event/team"
            className="rounded-xl border border-white/10 px-7 py-3.5 text-center text-sm font-bold text-white/60 transition hover:bg-white/5"
          >
            Team Lobby
          </Link>
        </div>
      </section>
    </main>
  );
}