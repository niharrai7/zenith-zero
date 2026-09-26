"use client";

import Link from "next/link";

export default function EventDetailsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <Link
            href="/events"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to Events
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white/50">
                LIVE COMPETITION
              </span>

              <span className="text-xs font-bold text-green-400">
                ● REGISTRATION OPEN
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Zenith Quiz Arena
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
              A competitive technical quiz designed to test programming,
              computer science, technology and logical reasoning skills.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <InfoCard title="Team Size" value="2 - 4" />
              <InfoCard title="Format" value="Live" />
              <InfoCard title="Difficulty" value="Mixed" />
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Competition Rules</h2>

              <div className="mt-5 space-y-3">
                <Rule number="01" text="Create or join a team before the competition starts." />
                <Rule number="02" text="Each team can have between 2 and 4 members." />
                <Rule number="03" text="Questions are answered within the allotted time." />
                <Rule number="04" text="Scores are calculated automatically after each round." />
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
              Event Status
            </p>

            <h2 className="mt-4 text-2xl font-bold">Registration Open</h2>

            <p className="mt-3 text-sm leading-6 text-white/40">
              Build your team and join the competition lobby.
            </p>

            <Link
              href="/events/event/join"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Join Team
            </Link>

            <Link
              href="/events/event/team"
              className="mt-3 flex w-full items-center justify-center rounded-2xl border border-white/10 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Team Lobby
            </Link>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs text-white/30">Competition</p>
              <p className="mt-2 text-sm font-semibold">Zenith Quiz Arena</p>

              <p className="mt-5 text-xs text-white/30">Team Format</p>
              <p className="mt-2 text-sm font-semibold">2 - 4 Members</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
        {title}
      </p>
      <p className="mt-2 text-lg font-bold">{value}</p>
    </div>
  );
}

function Rule({ number, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <span className="text-xs font-bold text-white/30">{number}</span>
      <p className="text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}