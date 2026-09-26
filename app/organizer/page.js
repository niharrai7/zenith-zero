"use client";

import Link from "next/link";

export default function OrganizerDashboard() {
  const metrics = [
    {
      label: "Total Registrations",
      value: "248",
      change: "+18%",
    },
    {
      label: "Active Teams",
      value: "64",
      change: "+12%",
    },
    {
      label: "Completion Rate",
      value: "91%",
      change: "+6%",
    },
    {
      label: "Average Score",
      value: "72.4",
      change: "+4.8%",
    },
  ];

  const events = [
    {
      name: "Zenith Quiz Arena",
      participants: 96,
      teams: 24,
      status: "Live",
    },
    {
      name: "AI Innovation Challenge",
      participants: 84,
      teams: 21,
      status: "Upcoming",
    },
    {
      name: "Code Sprint",
      participants: 68,
      teams: 19,
      status: "Registration",
    },
  ];

  const activity = [
    "Team Zenith Zero completed Round 03",
    "12 new participants registered",
    "AI Innovation Challenge reached 80% capacity",
    "Code Sprint registration opened",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
              href="/organizer/create"
              className="rounded-xl bg-green-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-green-300"
            >
              + Create Event
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Organizer Analytics
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              Event performance.
            </h1>

            <p className="mt-4 max-w-2xl text-white/50">
              Monitor registrations, teams, competition performance and event
              activity from one dashboard.
            </p>
          </div>

          <Link
            href="/organizer/create"
            className="w-fit rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-green-400/30 hover:text-green-300"
          >
            Manage Events →
          </Link>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm text-white/40">
                {metric.label}
              </p>

              <div className="mt-4 flex items-end justify-between">
                <p className="text-4xl font-black">
                  {metric.value}
                </p>

                <span className="rounded-full bg-green-400/10 px-2 py-1 text-xs font-semibold text-green-400">
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Registration Chart */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Registration Trend
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Participants over time
            </h2>

            <div className="mt-8 flex h-56 items-end gap-3">
              {[35, 48, 42, 61, 55, 73, 82, 91, 100, 94, 108, 124].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      style={{ height: `${height * 0.75}%` }}
                      className="w-full rounded-t-lg bg-green-400/70 transition group-hover:bg-green-400"
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-3 flex justify-between text-xs text-white/25">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
            </div>
          </div>

          {/* Score Distribution */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Performance
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Average score by round
            </h2>

            <div className="mt-8 space-y-6">
              <ScoreBar
                label="Round 01"
                score={86}
              />

              <ScoreBar
                label="Round 02"
                score={72}
              />

              <ScoreBar
                label="Round 03"
                score={64}
              />

              <ScoreBar
                label="Final Round"
                score={58}
              />
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Events
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Event performance
              </h2>
            </div>

            <Link
              href="/events"
              className="text-sm text-white/40 transition hover:text-green-400"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            {events.map((event) => (
              <div
                key={event.name}
                className="flex flex-col gap-4 border-b border-white/10 p-5 last:border-0 md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <p className="font-semibold">
                    {event.name}
                  </p>

                  <p className="mt-1 text-sm text-white/35">
                    {event.participants} participants · {event.teams} teams
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    event.status === "Live"
                      ? "bg-green-400/10 text-green-400"
                      : "bg-white/5 text-white/50"
                  }`}
                >
                  {event.status}
                </span>

                <Link
                  href="/organizer/create/rounds"
                  className="rounded-xl border border-white/10 px-4 py-2 text-center text-sm text-white/60 transition hover:text-white"
                >
                  Manage
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Activity + Quick Actions */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Recent Activity
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Latest updates
            </h2>

            <div className="mt-6 space-y-3">
              {activity.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400/10 text-xs font-bold text-green-400">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-sm text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              Quick Actions
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Manage your platform
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/organizer/create"
                className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
              >
                <p className="font-semibold">Create Event</p>
                <p className="mt-1 text-sm text-white/35">
                  Launch a new competition
                </p>
              </Link>

              <Link
                href="/organizer/create/rounds"
                className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
              >
                <p className="font-semibold">Manage Rounds</p>
                <p className="mt-1 text-sm text-white/35">
                  Configure competition flow
                </p>
              </Link>

              <Link
                href="/notifications"
                className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
              >
                <p className="font-semibold">Announcements</p>
                <p className="mt-1 text-sm text-white/35">
                  Send participant updates
                </p>
              </Link>

              <Link
                href="/events"
                className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
              >
                <p className="font-semibold">Browse Events</p>
                <p className="mt-1 text-sm text-white/35">
                  Inspect live competitions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ScoreBar({ label, score }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-white/50">{label}</span>
        <span className="font-semibold">{score}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-green-400"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}