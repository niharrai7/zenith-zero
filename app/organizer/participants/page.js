"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const participants = [
  {
    id: 1,
    name: "Nihar M",
    email: "mnihar100@gmail.com",
    team: "Zenith Zero",
    score: 80,
    status: "Active",
  },
  {
    id: 2,
    name: "Participant 02",
    email: "participant02@example.com",
    team: "Zenith Zero",
    score: 76,
    status: "Active",
  },
  {
    id: 3,
    name: "Participant 03",
    email: "participant03@example.com",
    team: "Byte Force",
    score: 88,
    status: "Active",
  },
  {
    id: 4,
    name: "Participant 04",
    email: "participant04@example.com",
    team: "Code Titans",
    score: 94,
    status: "Completed",
  },
  {
    id: 5,
    name: "Participant 05",
    email: "participant05@example.com",
    team: "Logic Lords",
    score: 74,
    status: "Active",
  },
  {
    id: 6,
    name: "Participant 06",
    email: "participant06@example.com",
    team: "Tech Warriors",
    score: 69,
    status: "Pending",
  },
  {
    id: 7,
    name: "Participant 07",
    email: "participant07@example.com",
    team: "AI Builders",
    score: 82,
    status: "Completed",
  },
  {
    id: 8,
    name: "Participant 08",
    email: "participant08@example.com",
    team: "Dev Masters",
    score: 71,
    status: "Active",
  },
];

export default function ParticipantsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredParticipants = useMemo(() => {
    return participants.filter((participant) => {
      const matchesSearch =
        participant.name.toLowerCase().includes(search.toLowerCase()) ||
        participant.email.toLowerCase().includes(search.toLowerCase()) ||
        participant.team.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || participant.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const activeCount = participants.filter(
    (participant) => participant.status === "Active"
  ).length;

  const completedCount = participants.filter(
    (participant) => participant.status === "Completed"
  ).length;

  const pendingCount = participants.filter(
    (participant) => participant.status === "Pending"
  ).length;

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
              href="/organizer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:text-white"
            >
              ← Dashboard
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
              Organizer
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              Participants.
            </h1>

            <p className="mt-4 max-w-2xl text-white/50">
              Manage registered participants, inspect teams and monitor
              competition status.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-white/30">
              Selected Event
            </p>

            <p className="mt-1 font-semibold">
              Zenith Quiz Arena
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatCard
            label="Active"
            value={activeCount}
          />

          <StatCard
            label="Completed"
            value={completedCount}
          />

          <StatCard
            label="Pending"
            value={pendingCount}
          />
        </div>

        {/* Controls */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search participant, email or team..."
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 pl-11 text-sm outline-none transition placeholder:text-white/25 focus:border-green-400/40"
              />

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                ⌕
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {["All", "Active", "Completed", "Pending"].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      filter === option
                        ? "bg-green-400 text-black"
                        : "border border-white/10 bg-black text-white/50 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Participant Table */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Participant Directory
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {filteredParticipants.length} participants
              </h2>
            </div>

            <span className="hidden text-sm text-white/30 sm:block">
              {filter} participants
            </span>
          </div>

          <div className="hidden grid-cols-[1.5fr_1.5fr_1fr_100px_120px_100px] gap-4 border-b border-white/10 bg-white/[0.02] px-6 py-4 text-xs uppercase tracking-widest text-white/30 lg:grid">
            <span>Participant</span>
            <span>Email</span>
            <span>Team</span>
            <span>Score</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          <div>
            {filteredParticipants.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-lg font-semibold">
                  No participants found
                </p>

                <p className="mt-2 text-sm text-white/35">
                  Try changing your search or filter.
                </p>
              </div>
            ) : (
              filteredParticipants.map((participant) => (
                <div
                  key={participant.id}
                  className="border-b border-white/10 p-5 last:border-0 lg:grid lg:grid-cols-[1.5fr_1.5fr_1fr_100px_120px_100px] lg:items-center lg:gap-4 lg:px-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-sm font-bold text-green-400">
                      {participant.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <p className="font-semibold">
                        {participant.name}
                      </p>

                      <p className="mt-1 text-xs text-white/30 lg:hidden">
                        {participant.email}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 hidden text-sm text-white/50 lg:mt-0 lg:block">
                    {participant.email}
                  </p>

                  <p className="mt-4 text-sm text-white/60 lg:mt-0">
                    <span className="mr-2 text-xs text-white/30 lg:hidden">
                      Team:
                    </span>
                    {participant.team}
                  </p>

                  <p className="mt-3 font-bold lg:mt-0">
                    <span className="mr-2 text-xs font-normal text-white/30 lg:hidden">
                      Score:
                    </span>
                    {participant.score}
                  </p>

                  <div className="mt-3 lg:mt-0">
                    <StatusBadge status={participant.status} />
                  </div>

                  <button
                    onClick={() =>
                      alert(
                        `Participant: ${participant.name}\nTeam: ${participant.team}\nScore: ${participant.score}`
                      )
                    }
                    className="mt-4 rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:border-green-400/30 hover:text-green-300 lg:mt-0"
                  >
                    View
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Link
            href="/organizer"
            className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
          >
            <p className="font-semibold">Analytics</p>
            <p className="mt-1 text-sm text-white/35">
              Return to organizer metrics
            </p>
          </Link>

          <Link
            href="/organizer/create/rounds"
            className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
          >
            <p className="font-semibold">Manage Rounds</p>
            <p className="mt-1 text-sm text-white/35">
              Configure competition rounds
            </p>
          </Link>

          <Link
            href="/notifications"
            className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
          >
            <p className="font-semibold">Announcements</p>
            <p className="mt-1 text-sm text-white/35">
              Send event updates
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm text-white/40">{label}</p>
      <p className="mt-3 text-4xl font-black">{value}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-400/10 text-green-400 border-green-400/20",
    Completed: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    Pending: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}