"use client";

import Link from "next/link";

const rules = [
  "Teams must contain 2 - 4 members.",
  "Each team can participate only once.",
  "Participants must follow the organizer instructions.",
  "Round qualification depends on the competition format.",
];

const timeline = [
  {
    number: "01",
    title: "Registration",
    description: "Join or create your team before registration closes.",
    status: "OPEN",
  },
  {
    number: "02",
    title: "Qualification",
    description: "Complete the first round and earn your team score.",
    status: "UPCOMING",
  },
  {
    number: "03",
    title: "Final",
    description: "Top teams compete in the final challenge.",
    status: "UPCOMING",
  },
];

export default function EventPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
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
        {/* Hero */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
              REGISTRATION OPEN
            </span>

            <span className="text-xs text-white/30">
              Live Competition
            </span>
          </div>

          <div className="mt-7 max-w-4xl">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Zenith Quiz Arena
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              A fast-paced team competition designed to test technical
              knowledge, problem solving and decision making under pressure.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Info label="Format" value="Live" />
            <Info label="Team Size" value="2 - 4" />
            <Info label="Rounds" value="3" />
            <Info label="Teams" value="20 Max" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events/event/join"
              className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-bold text-black transition hover:bg-white/90"
            >
              Join Competition →
            </Link>

            <Link
              href="/events/event/team"
              className="rounded-2xl border border-white/10 px-6 py-4 text-center text-sm font-semibold text-white/60 transition hover:border-white/20 hover:text-white"
            >
              Open Team Lobby
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Timeline */}
          <section>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Competition Flow
              </p>

              <h2 className="mt-2 text-2xl font-black">
                How it works
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {timeline.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-xs font-black">
                    {item.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <span
                        className={`w-fit rounded-full border px-2.5 py-1 text-[8px] font-bold tracking-widest ${
                          item.status === "OPEN"
                            ? "border-green-400/20 bg-green-400/5 text-green-400"
                            : "border-white/10 text-white/25"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/35">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Event Information
              </p>

              <div className="mt-6 space-y-5">
                <Info label="Category" value="Technical Challenge" />
                <Info label="Registration" value="Open" />
                <Info label="Maximum Teams" value="20" />
                <Info label="Team Size" value="2 - 4 members" />
                <Info label="Competition" value="3 rounds" />
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Rules
              </p>

              <div className="mt-5 space-y-4">
                {rules.map((rule, index) => (
                  <div
                    key={rule}
                    className="flex gap-3"
                  >
                    <span className="text-xs font-bold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-white/40">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Organizer CTA */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Organizers
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Want to run your own competition?
              </h2>

              <p className="mt-2 text-sm text-white/35">
                Create an event, configure rounds and manage participating
                teams from the organizer console.
              </p>
            </div>

            <Link
              href="/organizer/create"
              className="w-fit rounded-2xl border border-white/10 px-5 py-3.5 text-sm font-semibold transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              Create Event →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-white/70">
        {value}
      </p>
    </div>
  );
}