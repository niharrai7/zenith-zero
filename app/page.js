export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

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
            className="transition hover:text-cyan-400"
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

        <a
          href="/login"
          className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
        >
          Login
        </a>

      </nav>


      {/* HERO */}

      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">

        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            The Competition Platform
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            COMPETE.
            <br />
            <span className="text-cyan-400">
              CONQUER.
            </span>
            <br />
            GET RECOGNIZED.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            A real-time platform for team competitions,
            live quizzes, leaderboards, results,
            and verifiable certificates.
          </p>


          {/* HERO BUTTONS */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/events"
              className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:bg-cyan-300"
            >
              Explore Events
            </a>

            <a
              href="/events/event/join"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Join Competition
            </a>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="border-t border-white/10 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Built for competition
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need to compete.
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <Feature
              number="01"
              title="Live Quizzes"
              description="Participate in synchronized real-time competitions with timed questions."
            />

            <Feature
              number="02"
              title="Live Scores"
              description="Track team performance and watch rankings change in real time."
            />

            <Feature
              number="03"
              title="Team Battles"
              description="Create teams, invite members, and compete together."
            />

            <Feature
              number="04"
              title="Certificates"
              description="Receive digital certificates with unique verification IDs."
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Your competition starts here
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Ready to enter the arena?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Join a competition, build your team,
            and prove what you can do.
          </p>

          <a
            href="/events"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Get Started
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 px-8 py-8">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Zenith Zero. All rights reserved.
          </p>

          <p>
            Compete. Conquer. Get Recognized.
          </p>

        </div>

      </footer>

    </main>
  );
}


function Feature({ number, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.04]">

      <p className="font-mono text-sm text-cyan-400">
        {number}
      </p>

      <h3 className="mt-8 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}