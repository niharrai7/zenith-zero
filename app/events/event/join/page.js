"use client";

import { useState } from "react";

export default function JoinTeam() {
  const [teamCode, setTeamCode] = useState("");
  const [error, setError] = useState("");

  const joinTeam = () => {
    const code = teamCode.trim().toUpperCase();

    if (!code) {
      setError("Enter a team code.");
      return;
    }

    if (code.length !== 7) {
      setError("Team code must be 7 characters.");
      return;
    }

    if (code !== "ZZU3ABD") {
      setError("Team code not found.");
      return;
    }

    window.location.href = "/events/event/team";
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-black tracking-[0.25em]"
          >
            ZENITHZERO
          </a>

          <a
            href="/events"
            className="text-sm text-gray-400 hover:text-white"
          >
            Events
          </a>
        </div>
      </header>

      <section className="mx-auto flex min-h-[80vh] max-w-xl items-center px-6">
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Join Team
          </p>

          <h1 className="mt-3 text-4xl font-black">
            Enter Team Code
          </h1>

          <p className="mt-3 text-gray-500">
            Enter the code shared by your team captain.
          </p>

          <input
            value={teamCode}
            onChange={(e) => {
              setTeamCode(e.target.value.toUpperCase());
              setError("");
            }}
            maxLength={7}
            placeholder="ZZU3ABD"
            className="mt-8 w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-center text-xl font-bold tracking-[0.3em] text-white outline-none transition focus:border-cyan-400"
          />

          {error && (
            <p className="mt-3 text-sm font-medium text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={joinTeam}
            className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300"
          >
            Join Team
          </button>

          <a
            href="/events"
            className="mt-4 block text-center text-sm text-gray-500 hover:text-white"
          >
            ← Back to Events
          </a>
        </div>
      </section>
    </main>
  );
}