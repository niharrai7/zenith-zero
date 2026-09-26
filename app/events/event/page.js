export default function EventDetails() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-white/10 px-8 py-6">

        <a
          href="/"
          className="text-2xl font-bold tracking-wider"
        >
          ZENITH<span className="text-cyan-400">ZERO</span>
        </a>

        <div className="flex items-center gap-8 text-sm text-gray-300">

          <a
            href="/"
            className="transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="/events"
            className="text-cyan-400"
          >
            Events
          </a>

          <a
            href="/leaderboard"
            className="transition hover:text-cyan-400"
          >
            Leaderboard
          </a>

          <a
            href="/certificates"
            className="transition hover:text-cyan-400"
          >
            Certificates
          </a>

        </div>

      </nav>


      {/* Event Hero */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <span className="rounded-full border border-cyan-400/30 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-400">
            LIVE QUIZ
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Zenith Quiz Arena
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A real-time team competition where knowledge,
            strategy and speed decide who reaches the top.
          </p>


          {/* Event Information */}
          <div className="mt-12 grid gap-5 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs text-gray-500">
                DATE
              </p>

              <p className="mt-3 font-semibold">
                Coming Soon
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs text-gray-500">
                TEAM SIZE
              </p>

              <p className="mt-3 font-semibold">
                2 - 4 Members
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs text-gray-500">
                FORMAT
              </p>

              <p className="mt-3 font-semibold">
                Live Competition
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs text-gray-500">
                STATUS
              </p>

              <p className="mt-3 font-semibold text-cyan-400">
                Registration Open
              </p>
            </div>

          </div>


          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <a
              href="/events/event/join"
              className="rounded-full bg-cyan-400 px-8 py-4 text-center font-bold text-black transition hover:bg-cyan-300"
            >
              Join Competition
            </a>

            <a
              href="/events"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-bold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Back to Events
            </a>

          </div>

        </div>

      </section>


      {/* About */}
      <section className="border-t border-white/10 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-bold">
            About the Competition
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-gray-400">
            Zenith Quiz Arena is designed for teams that want
            to compete under pressure. Questions appear live
            for all participants and scores are calculated
            throughout the competition.
          </p>


          {/* Rules */}
          <div className="mt-14">

            <h3 className="text-xl font-bold">
              Competition Rules
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl border border-white/10 p-5 text-gray-400">
                01 — Teams must contain 2 to 4 members.
              </div>

              <div className="rounded-xl border border-white/10 p-5 text-gray-400">
                02 — Every question has a limited time.
              </div>

              <div className="rounded-xl border border-white/10 p-5 text-gray-400">
                03 — Correct answers increase your score.
              </div>

              <div className="rounded-xl border border-white/10 p-5 text-gray-400">
                04 — The leaderboard updates throughout the event.
              </div>

              <div className="rounded-xl border border-white/10 p-5 text-gray-400">
                05 — Final rankings determine the winners.
              </div>

              <div className="rounded-xl border border-white/10 p-5 text-gray-400">
                06 — Certificates are issued to participants.
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-8">

        <div className="mx-auto flex max-w-6xl justify-between text-sm text-gray-500">

          <p>
            © 2026 Zenith Zero
          </p>

          <p>
            Compete. Conquer. Get Recognized.
          </p>

        </div>

      </footer>

    </main>
  );
}