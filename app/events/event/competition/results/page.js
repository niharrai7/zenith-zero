"use client";

import Link from "next/link";

export default function ResultsPage() {
  const rounds = [
    {
      name: "Round 01",
      type: "General Quiz",
      score: 30,
      total: 30,
      status: "Perfect",
    },
    {
      name: "Round 02",
      type: "Technology",
      score: 28,
      total: 35,
      status: "Completed",
    },
    {
      name: "Round 03",
      type: "Rapid Fire",
      score: 22,
      total: 35,
      status: "Completed",
    },
  ];

  const rankings = [
    { rank: 1, team: "Code Titans", score: 94 },
    { rank: 2, team: "Byte Force", score: 88 },
    { rank: 3, team: "Zenith Zero", score: 80, current: true },
    { rank: 4, team: "Logic Lords", score: 74 },
    { rank: 5, team: "Tech Warriors", score: 69 },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-black">
            ZENITH<span className="text-green-400"> ZERO</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/events"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:text-white"
            >
              Events
            </Link>

            <Link
              href="/profile"
              className="rounded-xl bg-green-400 px-4 py-2 text-sm font-bold text-black"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 text-4xl">
            🏆
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Competition Complete
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Final Scoreboard
          </h1>

          <p className="mt-4 text-white/40">
            Zenith Quiz Arena · Final results
          </p>
        </div>

        {/* Main Score */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="rounded-3xl border border-green-400/20 bg-green-400/[0.04] p-8 text-center">
            <p className="text-sm uppercase tracking-widest text-white/40">
              Your Final Rank
            </p>

            <p className="mt-4 text-7xl font-black text-green-400">
              #3
            </p>

            <p className="mt-3 text-lg font-bold">
              Zenith Zero
            </p>

            <p className="mt-1 text-sm text-white/40">
              Out of 24 participating teams
            </p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-sm text-white/40">
                Final Score
              </p>

              <p className="mt-2 text-5xl font-black">
                80
                <span className="text-2xl text-white/30">
                  /100
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Performance
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Team performance
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <StatCard label="Correct" value="16" />
              <StatCard label="Questions" value="20" />
              <StatCard label="Accuracy" value="80%" />
            </div>

            <div className="mt-7">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-white/40">
                  Overall Score
                </span>

                <span className="font-semibold">
                  80%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[80%] rounded-full bg-green-400" />
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Result
              </p>

              <p className="mt-2 text-lg font-bold text-green-400">
                Competition completed successfully
              </p>
            </div>
          </div>
        </div>

        {/* Round Breakdown */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Round Breakdown
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Score by round
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-4 border-b border-white/10 bg-white/[0.03] px-5 py-4 text-xs uppercase tracking-widest text-white/30 sm:grid">
              <span>Round</span>
              <span>Category</span>
              <span>Score</span>
              <span>Status</span>
            </div>

            {rounds.map((round) => (
              <div
                key={round.name}
                className="grid gap-2 border-b border-white/10 px-5 py-5 last:border-0 sm:grid-cols-4 sm:items-center"
              >
                <div>
                  <p className="font-semibold">{round.name}</p>
                  <p className="text-xs text-white/30 sm:hidden">
                    {round.type}
                  </p>
                </div>

                <span className="hidden text-sm text-white/50 sm:block">
                  {round.type}
                </span>

                <span className="font-bold">
                  {round.score}
                  <span className="text-white/30">
                    /{round.total}
                  </span>
                </span>

                <span className="w-fit rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
                  {round.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Final Rankings
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Top teams
              </h2>
            </div>

            <Link
              href="/events/event/competition/leaderboard"
              className="text-sm text-white/40 transition hover:text-green-400"
            >
              Live leaderboard →
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {rankings.map((team) => (
              <div
                key={team.team}
                className={`flex items-center gap-4 rounded-2xl border p-4 ${
                  team.current
                    ? "border-green-400/30 bg-green-400/[0.06]"
                    : "border-white/10 bg-black/20"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl font-black ${
                    team.current
                      ? "bg-green-400 text-black"
                      : "bg-white/5 text-white/50"
                  }`}
                >
                  {team.rank}
                </div>

                <div className="flex-1">
                  <p className="font-semibold">
                    {team.team}
                    {team.current && (
                      <span className="ml-2 text-xs font-normal text-green-400">
                        YOU
                      </span>
                    )}
                  </p>
                </div>

                <p className="font-black">
                  {team.score}
                  <span className="ml-1 text-xs font-normal text-white/30">
                    pts
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link
            href="/events/event/competition/leaderboard"
            className="rounded-2xl bg-green-400 px-5 py-4 text-center font-bold text-black transition hover:bg-green-300"
          >
            View Leaderboard
          </Link>

          <Link
            href="/events/event/team"
            className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Team Lobby
          </Link>

          <Link
            href="/events"
            className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Explore Events
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-xs uppercase tracking-widest text-white/30">
        {label}
      </p>

      <p className="mt-2 text-3xl font-black">
        {value}
      </p>
    </div>
  );
}