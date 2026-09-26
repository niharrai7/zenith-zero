"use client";

import { useState } from "react";

export default function TeamLobby() {
  const [teamCode] = useState("ZZU3ABD");
  const [copied, setCopied] = useState(false);

  const team = {
    name: "nivi",
    captain: "ni",
    email: "mnihar100@gmail.com",
    competition: "Zenith Quiz Arena",
    format: "Live Competition",
    teamSize: "2 - 4",
  };

  const copyTeamCode = async () => {
    try {
      await navigator.clipboard.writeText(teamCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Copy failed. Please copy the code manually.");
    }
  };

  const startCompetition = () => {
    alert("Competition will start once your team is ready!");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-black tracking-[0.25em] text-white"
          >
            ZENITHZERO
          </a>

          <nav className="flex gap-6 text-sm text-gray-400">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <a href="/events" className="transition hover:text-white">
              Events
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Team Lobby
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {team.name}
          </h1>

          <p className="mt-3 text-gray-400">
            Your team is ready. Share the code and invite your teammates.
          </p>
        </div>

        {/* Team Code */}
        <div className="mb-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="mb-2 text-sm text-gray-400">Team Code</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-4xl font-black tracking-[0.25em] text-cyan-300">
              {teamCode}
            </div>

            <button
              onClick={copyTeamCode}
              className="rounded-xl bg-white px-5 py-3 font-bold text-black transition hover:bg-gray-200"
            >
              {copied ? "Copied ✓" : "Copy Team Code"}
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Share this code with your teammates.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Members */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Team Members</h2>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300">
                1 / 4
              </span>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{team.captain}</p>
                  <p className="text-sm text-gray-500">{team.email}</p>
                </div>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  CAPTAIN
                </span>
              </div>
            </div>

            {/* Empty slots */}
            <div className="mt-3 space-y-2">
              {[2, 3, 4].map((slot) => (
                <div
                  key={slot}
                  className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-gray-600"
                >
                  Waiting for teammate...
                </div>
              ))}
            </div>
          </div>

          {/* Competition */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-6 text-xl font-bold">Competition</h2>

            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Event
                </p>
                <p className="mt-1 font-semibold">{team.competition}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Format
                </p>
                <p className="mt-1 font-semibold">{team.format}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Team Size
                </p>
                <p className="mt-1 font-semibold">{team.teamSize}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Status
                </p>

                <span className="mt-2 inline-flex rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-semibold text-yellow-300">
                  Waiting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Waiting */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-2xl">
            👥
          </div>

          <h2 className="text-2xl font-bold">
            Waiting for teammates
          </h2>

          <p className="mx-auto mt-2 max-w-md text-gray-500">
            Share your team code with your teammates. Once your team is ready,
            you can start the competition.
          </p>

          <button
            onClick={startCompetition}
            className="mt-6 rounded-xl bg-cyan-400 px-8 py-3 font-black text-black transition hover:bg-cyan-300"
          >
            Start Competition
          </button>
        </div>
      </section>
    </main>
  );
}