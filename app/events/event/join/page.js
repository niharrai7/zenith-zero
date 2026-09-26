"use client";

import { useState } from "react";
import Link from "next/link";

export default function JoinEventPage() {
  const [teamCode, setTeamCode] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Participant");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");

  function handleJoin(e) {
    e.preventDefault();
    setError("");

    if (!participantName.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (teamCode.length !== 7) {
      setError("Team code must contain exactly 7 characters.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setJoined(true);
    }, 700);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <Link
            href="/events/event"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Event
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Participant Registration
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Join Event
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
              Enter your details and connect with your competition team.
            </p>

            <form
              onSubmit={handleJoin}
              className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold text-white/60">
                    Full Name
                  </label>

                  <input
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none placeholder:text-white/20 focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/60">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none placeholder:text-white/20 focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/60">
                    Team Role
                  </label>

                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm outline-none focus:border-white/30"
                  >
                    <option>Participant</option>
                    <option>Captain</option>
                    <option>Technical Lead</option>
                    <option>Research Lead</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-white/60">
                      Team Code
                    </label>

                    <span className="text-[10px] text-white/25">
                      {teamCode.length}/7
                    </span>
                  </div>

                  <input
                    value={teamCode}
                    maxLength={7}
                    onChange={(e) =>
                      setTeamCode(
                        e.target.value
                          .toUpperCase()
                          .replace(/[^A-Z0-9]/g, "")
                      )
                    }
                    placeholder="ZZU3ABD"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 font-mono text-sm tracking-[0.2em] outline-none placeholder:text-white/20 focus:border-white/30"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || joined}
                className="mt-6 w-full rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {joined
                  ? "Registration Complete ✓"
                  : loading
                  ? "Joining Team..."
                  : "Join Competition →"}
              </button>

              {joined && (
                <Link
                  href="/events/event/team"
                  className="mt-3 block rounded-2xl border border-white/10 px-5 py-4 text-center text-sm font-semibold text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  Open Team Lobby
                </Link>
              )}
            </form>
          </div>

          {/* Event Card */}
          <aside className="lg:pt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
                REGISTRATION OPEN
              </span>

              <h2 className="mt-5 text-2xl font-black">
                Zenith Quiz Arena
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Test your technical knowledge and problem-solving ability
                through multiple competitive rounds.
              </p>

              <div className="mt-7 space-y-4">
                <Info label="Format" value="Live Competition" />
                <Info label="Team Size" value="2 - 4 members" />
                <Info label="Rounds" value="3" />
                <Info label="Maximum Teams" value="20" />
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Demo Team Code
              </p>

              <p className="mt-3 font-mono text-xl font-black tracking-[0.2em]">
                ZZU3ABD
              </p>

              <p className="mt-2 text-xs leading-5 text-white/30">
                Use this code to test the participant registration flow.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-xs text-white/30">{label}</span>
      <span className="text-xs font-semibold text-white/70">
        {value}
      </span>
    </div>
  );
}