"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const events = [
  {
    id: 1,
    title: "Zenith Quiz Arena",
    category: "Quiz",
    format: "Live",
    teams: "2–4",
    status: "Open",
    description:
      "A fast-paced technical quiz featuring multiple rounds, live scoring and team competition.",
  },
  {
    id: 2,
    title: "Code Sprint",
    category: "Coding",
    format: "Online",
    teams: "1–3",
    status: "Open",
    description:
      "Solve programming challenges and compete against developers across multiple difficulty levels.",
  },
  {
    id: 3,
    title: "AI Innovation Challenge",
    category: "AI",
    format: "Hybrid",
    teams: "2–5",
    status: "Open",
    description:
      "Build practical AI solutions and present your idea to a panel of technical judges.",
  },
  {
    id: 4,
    title: "Cyber Defense Cup",
    category: "Cybersecurity",
    format: "Live",
    teams: "2–4",
    status: "Closing Soon",
    description:
      "Test your cybersecurity knowledge through challenges covering networks, systems and security.",
  },
  {
    id: 5,
    title: "UI/UX Design Jam",
    category: "Design",
    format: "Online",
    teams: "1–2",
    status: "Open",
    description:
      "Design an intuitive digital experience within a limited competition window.",
  },
  {
    id: 6,
    title: "DevOps Automation Challenge",
    category: "DevOps",
    format: "Hybrid",
    teams: "2–4",
    status: "Upcoming",
    description:
      "Automate deployment workflows using modern CI/CD and infrastructure practices.",
  },
];

const categories = [
  "All",
  "Coding",
  "AI",
  "Quiz",
  "Cybersecurity",
  "Design",
  "DevOps",
];

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [format, setFormat] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.description.toLowerCase().includes(search.toLowerCase()) ||
        event.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || event.category === category;

      const matchesFormat =
        format === "All" || event.format === format;

      return matchesSearch && matchesCategory && matchesFormat;
    });
  }, [search, category, format]);

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setFormat("All");
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/notifications"
              className="hidden rounded-xl border border-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-white/40 transition hover:bg-white/5 sm:block"
            >
              Notifications
            </Link>

            <Link
              href="/organizer"
              className="rounded-xl border border-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-widest text-white/40 transition hover:bg-white/5"
            >
              Organizer
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-green-400">
            Discover Competitions
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                Find Your Event
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                Explore competitions, filter by category and find the right
                challenge for your team.
              </p>
            </div>

            <p className="text-sm text-white/30">
              <span className="font-bold text-white">
                {filteredEvents.length}
              </span>{" "}
              events found
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/25">
                ⌕
              </span>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search events, categories or challenges..."
                className="w-full rounded-2xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/20"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white/50 transition hover:bg-white/5 lg:hidden"
            >
              {showFilters ? "Hide Filters ↑" : "Show Filters ↓"}
            </button>

            <div
              className={`flex flex-col gap-3 sm:flex-row lg:flex ${
                showFilters ? "flex" : "hidden"
              }`}
            >
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/60 outline-none"
              >
                {categories.map((item) => (
                  <option key={item} value={item} className="bg-black">
                    {item}
                  </option>
                ))}
              </select>

              <select
                value={format}
                onChange={(event) => setFormat(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/60 outline-none"
              >
                <option value="All" className="bg-black">
                  All Formats
                </option>
                <option value="Live" className="bg-black">
                  Live
                </option>
                <option value="Online" className="bg-black">
                  Online
                </option>
                <option value="Hybrid" className="bg-black">
                  Hybrid
                </option>
              </select>

              <button
                onClick={clearFilters}
                className="rounded-2xl border border-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white/35 transition hover:bg-white/5"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest text-white/40">
                    {event.category}
                  </span>

                  <span
                    className={`text-[8px] font-bold uppercase tracking-widest ${
                      event.status === "Closing Soon"
                        ? "text-yellow-400"
                        : event.status === "Upcoming"
                        ? "text-white/30"
                        : "text-green-400"
                    }`}
                  >
                    ● {event.status}
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-black tracking-tight">
                  {event.title}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/35">
                  {event.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <Meta label="Format" value={event.format} />
                  <Meta label="Team Size" value={event.teams} />
                </div>

                <Link
                  href={
                    event.id === 1
                      ? "/events/event"
                      : "/events/event"
                  }
                  className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-center text-sm font-bold transition group-hover:bg-white group-hover:text-black"
                >
                  View Event →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <div className="text-3xl">⌕</div>

            <h2 className="mt-4 text-xl font-black">
              No events found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/30">
              Try changing your search or removing one of the filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black"
            >
              Clear Search
            </button>
          </div>
        )}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
                Organizer
              </p>

              <h2 className="mt-2 text-lg font-black">
                Want to host your own competition?
              </h2>
            </div>

            <Link
              href="/organizer/create"
              className="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-white/90"
            >
              Create Event →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Meta({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <p className="text-[8px] font-bold uppercase tracking-widest text-white/20">
        {label}
      </p>

      <p className="mt-1 text-xs font-bold text-white/60">
        {value}
      </p>
    </div>
  );
}