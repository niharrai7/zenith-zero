"use client";

import { useState } from "react";
import Link from "next/link";

const teamMembers = [
  {
    name: "ni",
    email: "mnihar100@gmail.com",
    role: "CAPTAIN",
  },
];

export default function TeamLobbyPage() {
  const [copied, setCopied] = useState(false);

  const teamCode = "ZZU3ABD";
  const maxMembers = 4;

  const copyTeamCode = async () => {
    try {
      await navigator.clipboard.writeText(teamCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <Link
            href="/events"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Events
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Competition Lobby
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Team Lobby
            </h1>

            <p className="mt-3 text-sm text-white/40">
              Your team is ready. Invite teammates before starting.
            </p>
          </div>

          <span className="w-fit rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-yellow-300">
            ● Waiting
          </span>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main team card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                  Team Name
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  nivi
                </h2>
              </div>

              <div className="sm:text-right">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                  Members
                </p>

                <p className="mt-2 text-2xl font-black">
                  {teamMembers.length}
                  <span className="text-white/25"> / {maxMembers}</span>
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{
                  width: `${(teamMembers.length / maxMembers) * 100}%`,
                }}
              />
            </div>

            {/* Members */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                Team Members
              </p>

              <div className="mt-4 space-y-3">
                {teamMembers.map((member) => (
                  <div
                    key={member.email}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-black">
                        {member.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold">
                          {member.name}
                        </p>

                        <p className="truncate text-xs text-white/35">
                          {member.email}
                        </p>
                      </div>
                    </div>

                    <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[9px] font-bold tracking-widest text-white/40 sm:block">
                      {member.role}
                    </span>
                  </div>
                ))}

                {/* Empty slots */}
                {Array.from({
                  length: maxMembers - teamMembers.length,
                }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-dashed border-white/10 p-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-white/15 text-white/20">
                      +
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white/25">
                        Waiting for teammate
                      </p>

                      <p className="mt-1 text-xs text-white/15">
                        Share the team code to invite someone.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team code */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                Team Code
              </p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center font-mono text-lg font-bold tracking-[0.25em]">
                  {teamCode}
                </div>

                <button
                  onClick={copyTeamCode}
                  className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          </div>

          {/* Competition details */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
              Competition
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Zenith Quiz Arena
            </h2>

            <div className="mt-7 space-y-5">
              <Detail label="Format" value="Live Competition" />
              <Detail label="Team Size" value="2 - 4 Members" />
              <Detail label="Status" value="Waiting for teammates" />
            </div>

            <button
              onClick={() =>
                alert("Waiting for all required teammates to join.")
              }
              className="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Start Competition
            </button>

            <Link
              href="/events"
              className="mt-3 flex w-full items-center justify-center rounded-2xl border border-white/10 px-5 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              Leave Lobby
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs text-white/30">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}