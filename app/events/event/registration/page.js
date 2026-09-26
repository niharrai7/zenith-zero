"use client";

import Link from "next/link";

export default function RegistrationPage() {
  const details = [
    ["Participant", "Nihar M"],
    ["Email", "mnihar100@gmail.com"],
    ["Team", "Zenith Zero"],
    ["Team Code", "ZZ2QMA2"],
    ["Team Size", "3 / 4"],
    ["Registration", "Confirmed"],
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
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
              href="/profile"
              className="rounded-xl bg-green-400 px-4 py-2 text-sm font-bold text-black"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-12">
        {/* Success Header */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 text-4xl text-green-400">
            ✓
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Registration Confirmed
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            You're officially registered.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Your registration for Zenith Quiz Arena has been successfully
            confirmed. Keep your team code ready for the competition.
          </p>
        </div>

        {/* Event Card */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Registered Event
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Zenith Quiz Arena
              </h2>

              <p className="mt-2 text-white/40">
                Live Technology Competition
              </p>
            </div>

            <div className="w-fit rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-bold text-green-300">
              CONFIRMED
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <InfoCard label="Format" value="Live Competition" />
            <InfoCard label="Team Size" value="2–4 Members" />
            <InfoCard label="Status" value="Registration Open" />
          </div>
        </div>

        {/* Registration Details */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Registration Details
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Participant information
          </h2>

          <div className="mt-6 divide-y divide-white/10">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-white/40">
                  {label}
                </span>

                <span
                  className={`font-semibold ${
                    label === "Registration"
                      ? "text-green-400"
                      : "text-white"
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Timeline */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Competition Flow
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            What happens next?
          </h2>

          <div className="mt-7 space-y-6">
            <TimelineItem
              number="01"
              title="Registration"
              description="Your team registration has been confirmed."
              active
            />

            <TimelineItem
              number="02"
              title="Team Lobby"
              description="Meet your teammates and verify your team details."
              active
            />

            <TimelineItem
              number="03"
              title="Competition"
              description="Join the live competition when the countdown reaches zero."
            />

            <TimelineItem
              number="04"
              title="Results"
              description="View your final score, rank and competition breakdown."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/events/event/team"
            className="rounded-2xl bg-green-400 px-5 py-4 text-center font-bold text-black transition hover:bg-green-300"
          >
            Team Lobby
          </Link>

          <Link
            href="/events/event/competition"
            className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Competition
          </Link>

          <Link
            href="/events/event/competition/leaderboard"
            className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Leaderboard
          </Link>

          <Link
            href="/events"
            className="rounded-2xl border border-white/10 px-5 py-4 text-center font-semibold text-white/70 transition hover:border-white/20 hover:text-white"
          >
            Browse Events
          </Link>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-xs uppercase tracking-widest text-white/30">
        {label}
      </p>

      <p className="mt-2 font-semibold text-white/80">
        {value}
      </p>
    </div>
  );
}

function TimelineItem({
  number,
  title,
  description,
  active = false,
}) {
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
          active
            ? "border-green-400/40 bg-green-400/10 text-green-400"
            : "border-white/10 bg-white/[0.03] text-white/30"
        }`}
      >
        {number}
      </div>

      <div className="pt-1">
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>
    </div>
  );
}