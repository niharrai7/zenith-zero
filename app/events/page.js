"use client";

import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Zenith Quiz Arena",
    category: "QUIZ",
    description:
      "Test your technical knowledge through a fast-paced live quiz competition.",
    teams: "2 - 4 Members",
    format: "Live Competition",
    status: "Open",
  },
  {
    id: 2,
    title: "Cyber Challenge",
    category: "CYBERSECURITY",
    description:
      "Solve security-focused challenges and demonstrate your problem-solving skills.",
    teams: "1 - 4 Members",
    format: "Challenge",
    status: "Open",
  },
  {
    id: 3,
    title: "Tech Trivia",
    category: "TECHNOLOGY",
    description:
      "Compete across programming, technology, startups and computer science.",
    teams: "1 - 3 Members",
    format: "Trivia",
    status: "Coming Soon",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight sm:text-2xl"
          >
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <div className="flex items-center gap-4 text-sm sm:gap-8">
            <Link href="/" className="text-white/50 hover:text-white">
              Home
            </Link>

            <Link href="/events" className="font-semibold text-white">
              Events
            </Link>

            <Link
              href="/organizer"
              className="hidden text-white/50 hover:text-white sm:block"
            >
              Organizer
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            Discover & Compete
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Upcoming Events
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Find technical competitions, quizzes and challenges. Build your
            team, join an event and compete.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="group flex min-h-[390px] flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-white/50">
                  {event.category}
                </span>

                <span
                  className={`text-[10px] font-bold uppercase tracking-widest ${
                    event.status === "Open"
                      ? "text-green-400"
                      : "text-white/30"
                  }`}
                >
                  ● {event.status}
                </span>
              </div>

              <div className="mt-8 flex-1">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {event.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {event.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      Team Size
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      {event.teams}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      Format
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      {event.format}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/events/event"
                className="mt-7 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
              >
                View Event
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}