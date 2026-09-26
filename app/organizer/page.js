"use client";

import Link from "next/link";

const stats = [
  { label: "Total Events", value: "03" },
  { label: "Active Teams", value: "12" },
  { label: "Participants", value: "48" },
  { label: "Live Events", value: "01" },
];

const events = [
  {
    name: "Zenith Quiz Arena",
    type: "Live Competition",
    teams: "8 teams",
    status: "LIVE",
  },
  {
    name: "Cyber Challenge",
    type: "Technical Challenge",
    teams: "3 teams",
    status: "OPEN",
  },
  {
    name: "Tech Trivia",
    type: "Trivia",
    teams: "1 team",
    status: "DRAFT",
  },
];

export default function OrganizerPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
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
            View Events →
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Organizer Console
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Dashboard
            </h1>

            <p className="mt-3 text-sm text-white/40">
              Manage competitions, teams and event activity.
            </p>
          </div>

          <Link
            href="/organizer/create"
            className="w-fit rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
          >
            + Create Event
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                {stat.label}
              </p>

              <p className="mt-3 text-3xl font-black">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">
                Your Events
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Monitor and manage your competitions.
              </p>
            </div>

            <span className="hidden text-xs text-white/25 sm:block">
              {events.length} events
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {events.map((event) => (
              <div
                key={event.name}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold">
                    {event.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/35">
                    {event.type}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 sm:justify-end">
                  <span className="text-xs text-white/35">
                    {event.teams}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-[9px] font-bold tracking-widest ${
                      event.status === "LIVE"
                        ? "border-green-400/20 bg-green-400/5 text-green-400"
                        : event.status === "OPEN"
                        ? "border-blue-400/20 bg-blue-400/5 text-blue-300"
                        : "border-white/10 text-white/30"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/organizer/create"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Event Management
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Create a Competition
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Configure event details, team limits and competition settings.
            </p>
          </Link>

          <Link
            href="/organizer/create/rounds"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Competition Setup
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Manage Rounds
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Add rounds and define how teams progress through your event.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}