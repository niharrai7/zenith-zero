const events = [
  {
    name: "Zenith Quiz Arena",
    type: "LIVE QUIZ",
    date: "Coming Soon",
    teams: "Team Competition",
  },
  {
    name: "Cyber Challenge",
    type: "CYBER",
    date: "Coming Soon",
    teams: "Team Competition",
  },
  {
    name: "Tech Trivia",
    type: "TECH",
    date: "Coming Soon",
    teams: "Individual / Team",
  },
];

export default function Events() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-6">

        <a href="/" className="text-2xl font-bold tracking-wider">
          ZENITH<span className="text-cyan-400">ZERO</span>
        </a>

        <div className="flex items-center gap-8 text-sm text-gray-300">
          <a href="/" className="hover:text-cyan-400">
            Home
          </a>

          <a href="/events" className="text-cyan-400">
            Events
          </a>

          <a href="#" className="hover:text-cyan-400">
            Leaderboard
          </a>

          <a href="#" className="hover:text-cyan-400">
            Certificates
          </a>
        </div>

      </nav>

      {/* Header */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Explore
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Upcoming Events
          </h1>

          <p className="mt-5 max-w-2xl text-gray-400">
            Discover competitions, build your team, and enter the arena.
          </p>

        </div>
      </section>

      {/* Event Cards */}
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {event.type}
                </span>

                <span className="text-xs text-gray-500">
                  UPCOMING
                </span>

              </div>

              <h2 className="mt-8 text-2xl font-bold">
                {event.name}
              </h2>

              <div className="mt-6 space-y-3 text-sm text-gray-400">
                <p>📅 {event.date}</p>
                <p>👥 {event.teams}</p>
              </div>

              <a
  href="/events/event"
  className="mt-8 block w-full rounded-xl border border-white/10 py-3 text-center font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
>
  View Event
</a>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}