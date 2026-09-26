"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function JoinTeamPage() {
  const router = useRouter();

  const [teamCode, setTeamCode] = useState("");
  const [error, setError] = useState("");
  const [joining, setJoining] = useState(false);

  const handleCodeChange = (e) => {
    const value = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 7);

    setTeamCode(value);
    setError("");
  };

  const handleJoin = async (e) => {
    e.preventDefault();

    if (!teamCode) {
      setError("Please enter your team code.");
      return;
    }

    if (teamCode.length !== 7) {
      setError("Team code must contain exactly 7 characters.");
      return;
    }

    setJoining(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    if (teamCode !== "ZZU3ABD") {
      setJoining(false);
      setError("Team code not found. Check the code and try again.");
      return;
    }

    router.push("/events/event/team");
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

      {/* Main */}
      <section className="flex min-h-[calc(100vh-77px)] items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Team Access
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Join a Team
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/45">
              Enter the 7-character team code shared by your team captain.
            </p>
          </div>

          <form
            onSubmit={handleJoin}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <label
              htmlFor="teamCode"
              className="text-xs font-bold uppercase tracking-widest text-white/40"
            >
              Team Code
            </label>

            <input
              id="teamCode"
              type="text"
              value={teamCode}
              onChange={handleCodeChange}
              placeholder="ZZU3ABD"
              maxLength={7}
              autoComplete="off"
              spellCheck="false"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-center text-xl font-black tracking-[0.3em] text-white outline-none transition placeholder:text-white/15 focus:border-white/30"
            />

            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-white/25">
                {teamCode.length}/7 characters
              </span>

              <span className="text-white/25">
                Letters + numbers
              </span>
            </div>

            {error && (
              <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/5 px-4 py-3">
                <p className="text-sm leading-5 text-red-300">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={joining}
              className="mt-6 w-full rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {joining ? "Joining Team..." : "Join Team"}
            </button>

            <Link
              href="/events"
              className="mt-3 flex w-full items-center justify-center rounded-2xl border border-white/10 px-5 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </Link>
          </form>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Demo Team Code
            </p>

            <p className="mt-2 font-mono text-sm font-bold tracking-[0.2em] text-white/60">
              ZZU3ABD
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}