"use client";

import { useState } from "react";
import Link from "next/link";

const initialTeams = [
  { rank: 1, name: "Code Titans", score: 92, answered: 18, status: "LIVE" },
  { rank: 2, name: "Binary Brains", score: 87, answered: 17, status: "LIVE" },
  { rank: 3, name: "Zenith Zero", score: 84, answered: 16, status: "YOU" },
  { rank: 4, name: "Debug Squad", score: 79, answered: 16, status: "LIVE" },
  { rank: 5, name: "Runtime Rebels", score: 74, answered: 15, status: "LIVE" },
  { rank: 6, name: "Null Pointers", score: 68, answered: 14, status: "LIVE" },
  { rank: 7, name: "Tech Titans", score: 63, answered: 13, status: "LIVE" },
  { rank: 8, name: "Stack Masters", score: 58, answered: 12, status: "LIVE" },
];

export default function LeaderboardPage() {
  const [teams, setTeams] = useState(initialTeams);
  const [lastUpdated, setLastUpdated] = useState("Just now");

  function refreshLeaderboard() {
    const updated = teams.map((team) => ({
      ...team,
      score:
        team.status === "YOU"
          ? team.score
          : Math.min(100, team.score + Math.floor(Math.random() * 4)),
    }));

    updated.sort((a, b) => b.score - a.score);

    const ranked = updated.map((team, index) => ({
      ...team,
      rank: index + 1,
    }));

    setTeams(ranked);
    setLastUpdated("A few seconds ago");
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-[9px] font-bold uppercase tracking-widest text-white/25 sm:block">
              Zenith Quiz Arena
            </span>

            <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
              LIVE
            </span>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-green-400">
              Competition Rankings
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Live Leaderboard
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
              Track your team&apos;s position while the competition is in
              progress.
            </p>
          </div>

          <button
            onClick={refreshLeaderboard}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold transition hover:bg-white/[0.07]"
          >
            ↻ Refresh Rankings
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Teams" value="24" />
          <Stat label="Current Round" value="01 / 03" />
          <Stat label="Updated" value={lastUpdated} />
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="hidden grid-cols-[80px_1fr_120px_120px_100px] border-b border-white/10 px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-white/25 sm:grid">
            <span>Rank</span>
            <span>Team</span>
            <span>Answered</span>
            <span>Score</span>
            <span>Status</span>
          </div>

          <div className="divide-y divide-white/5">
            {teams.map((team) => (
              <div
                key={team.name}
                className={`grid gap-4 px-5 py-5 sm:grid-cols-[80px_1fr_120px_120px_100px] sm:items-center sm:px-6 ${
                  team.status === "YOU"
                    ? "bg-green-400/[0.05]"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <RankBadge rank={team.rank} />

                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/20 sm:hidden">
                    Rank
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold">{team.name}</p>

                    {team.status === "YOU" && (
                      <span className="rounded-full border border-green-400/20 bg-green-400/10 px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-green-400">
                        Your Team
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-[10px] text-white/25">
                    Team Code: ZZ{team.rank}XMA
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/20 sm:hidden">
                    Answered
                  </p>
                  <p className="mt-1 text-sm font-semibold sm:mt-0">
                    {team.answered} / 20
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/20 sm:hidden">
                    Score
                  </p>
                  <p className="mt-1 text-lg font-black sm:mt-0">
                    {team.score}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest ${
                      team.status === "YOU"
                        ? "border-green-400/20 bg-green-400/10 text-green-400"
                        : "border-white/10 bg-white/[0.03] text-white/30"
                    }`}
                  >
                    {team.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Your Team
            </p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-black">Zenith Zero</h2>
                <p className="mt-1 text-xs text-white/30">
                  Current position
                </p>
              </div>

              <p className="text-4xl font-black text-green-400">
                #{teams.find((team) => team.status === "YOU")?.rank || 3}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Next Round
            </p>

            <h2 className="mt-4 text-2xl font-black">Round 02</h2>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Rankings will be recalculated after the current qualification
              round is closed.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/events/event/competition/questions"
            className="rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-black transition hover:bg-white/90"
          >
            Return to Competition →
          </Link>

          <Link
            href="/events/event/team"
            className="rounded-xl border border-white/10 px-6 py-3 text-center text-sm font-bold text-white/60 transition hover:bg-white/5"
          >
            Team Lobby
          </Link>
        </div>
      </section>
    </main>
  );
}

function RankBadge({ rank }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-black ${
        rank <= 3
          ? "border-white/20 bg-white/[0.07] text-white"
          : "border-white/10 bg-black/20 text-white/30"
      }`}
    >
      {rank}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 text-lg font-black">{value}</p>
    </div>
  );
}