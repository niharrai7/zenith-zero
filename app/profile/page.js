"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Nihar M");
  const [status, setStatus] = useState("Ready for the next challenge");

  const stats = [
    { label: "Events Joined", value: "8" },
    { label: "Competitions", value: "5" },
    { label: "Wins", value: "2" },
    { label: "Total Points", value: "1,240" },
  ];

  const activity = [
    {
      title: "Joined Zenith Quiz Arena",
      time: "Today",
      type: "Registration",
    },
    {
      title: "Completed Round 01",
      time: "Today",
      type: "Competition",
    },
    {
      title: "Moved to #3 on leaderboard",
      time: "Yesterday",
      type: "Achievement",
    },
    {
      title: "Team registration confirmed",
      time: "2 days ago",
      type: "Team",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-[#050505]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            ZENITH<span className="text-green-400"> ZERO</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/events" className="transition hover:text-white">
              Events
            </Link>

            <Link
              href="/notifications"
              className="transition hover:text-white"
            >
              Notifications
            </Link>

            <Link
              href="/organizer"
              className="transition hover:text-white"
            >
              Organizer
            </Link>

            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-green-300">
              Profile
            </span>
          </div>

          <Link
            href="/events"
            className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Browse Events
          </Link>
        </div>
      </nav>

      {/* Page */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Participant Profile
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Your competition hub.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50">
            Track your competition activity, team progress, achievements and
            upcoming challenges from one place.
          </p>
        </div>

        {/* Profile + Stats */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Profile Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-400 text-2xl font-black text-black">
                  NM
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="mt-1 text-white/50">
                    CSE · The National Institute of Engineering
                  </p>
                  <p className="mt-1 text-sm text-white/35">
                    mnihar100@gmail.com
                  </p>
                </div>
              </div>

              <button
                onClick={() => setEditing(!editing)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/70 transition hover:border-green-400/30 hover:text-green-300"
              >
                {editing ? "Close Editor" : "Edit Profile"}
              </button>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/30">
                Current Status
              </p>

              {editing ? (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="flex-1 rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none transition focus:border-green-400/50"
                    placeholder="Enter your status"
                  />

                  <button
                    onClick={() => setEditing(false)}
                    className="rounded-xl bg-green-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-300"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-white/70">{status}</p>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-white/40">{stat.label}</p>
                <p className="mt-3 text-3xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Current Team */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                  Current Team
                </p>

                <h2 className="mt-2 text-2xl font-bold">Zenith Zero</h2>

                <p className="mt-1 text-sm text-white/40">
                  Zenith Quiz Arena
                </p>
              </div>

              <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-bold text-green-300">
                ACTIVE
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Team Code
              </p>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-mono text-xl font-bold tracking-wider">
                  ZZ2QMA2
                </span>

                <button
                  onClick={() =>
                    navigator.clipboard?.writeText("ZZ2QMA2")
                  }
                  className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/60 transition hover:text-white"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-white/50">
                  Team Members
                </span>

                <span className="text-sm font-semibold">
                  3 / 4
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-green-400" />
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span>Nihar M</span>
                  <span className="text-xs text-green-400">CAPTAIN</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span>Team Member 02</span>
                  <span className="text-xs text-white/30">MEMBER</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <span>Team Member 03</span>
                  <span className="text-xs text-white/30">MEMBER</span>
                </div>
              </div>
            </div>

            <Link
              href="/events/event/team"
              className="mt-6 block rounded-xl border border-white/10 py-3 text-center text-sm font-semibold text-white/70 transition hover:border-green-400/30 hover:text-green-300"
            >
              Open Team Lobby →
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Quick Access
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Continue competing.
            </h2>

            <div className="mt-6 space-y-3">
              <Link
                href="/events/event/competition"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-green-400/30 hover:bg-green-400/[0.03]"
              >
                <div>
                  <p className="font-semibold">
                    Current Competition
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    Continue Zenith Quiz Arena
                  </p>
                </div>

                <span className="text-xl text-white/30 transition group-hover:text-green-400">
                  →
                </span>
              </Link>

              <Link
                href="/events/event/competition/leaderboard"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-green-400/30 hover:bg-green-400/[0.03]"
              >
                <div>
                  <p className="font-semibold">
                    Leaderboard
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    Check your team's current rank
                  </p>
                </div>

                <span className="text-xl text-white/30 transition group-hover:text-green-400">
                  →
                </span>
              </Link>

              <Link
                href="/notifications"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-green-400/30 hover:bg-green-400/[0.03]"
              >
                <div>
                  <p className="font-semibold">
                    Notifications
                  </p>
                  <p className="mt-1 text-sm text-white/40">
                    View competition updates
                  </p>
                </div>

                <span className="text-xl text-white/30 transition group-hover:text-green-400">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Activity
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Recent activity
              </h2>
            </div>

            <span className="hidden text-sm text-white/30 sm:block">
              Latest updates
            </span>
          </div>

          <div className="mt-6 divide-y divide-white/10">
            {activity.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center gap-4 py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-sm font-bold text-green-300">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>

                  <div className="mt-1 flex gap-3 text-xs text-white/35">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/events"
            className="rounded-2xl bg-green-400 px-6 py-4 text-center font-bold text-black transition hover:bg-green-300"
          >
            Explore More Events
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-white/10 px-6 py-4 text-center font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}