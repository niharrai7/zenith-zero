"use client";

import { useState } from "react";
import Link from "next/link";

const initialMembers = [
  {
    id: 1,
    name: "ni",
    email: "mnihar100@gmail.com",
    role: "CAPTAIN",
  },
];

export default function TeamLobbyPage() {
  const [members, setMembers] = useState(initialMembers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const maxMembers = 4;

  function addMember(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Enter both name and email.");
      return;
    }

    if (members.length >= maxMembers) {
      alert("Team is already full.");
      return;
    }

    setMembers([
      ...members,
      {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        role: "MEMBER",
      },
    ]);

    setName("");
    setEmail("");
    setShowForm(false);
  }

  function removeMember(id) {
    setMembers(members.filter((member) => member.id !== id));
  }

  async function copyCode() {
    await navigator.clipboard.writeText("ZZU3ABD");
    alert("Team code copied!");
  }

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
            href="/events/event"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Competition
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
              Team Workspace
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Team Lobby
            </h1>

            <p className="mt-3 text-sm text-white/40">
              Manage your teammates before the competition begins.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Team Code
            </p>

            <button
              onClick={copyCode}
              className="mt-1 font-mono text-lg font-black tracking-[0.2em] transition hover:text-white/60"
            >
              ZZU3ABD
            </button>
          </div>
        </div>

        {/* Team Overview */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat
            label="Members"
            value={`${members.length} / ${maxMembers}`}
          />

          <Stat
            label="Competition"
            value="Zenith Quiz Arena"
          />

          <Stat
            label="Status"
            value="Waiting"
          />
        </div>

        {/* Members */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">
                Team Members
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Add teammates using their name and email.
              </p>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              disabled={members.length >= maxMembers}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {showForm ? "Close" : "+ Add Member"}
            </button>
          </div>

          {/* Add Member */}
          {showForm && (
            <form
              onSubmit={addMember}
              className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Member name"
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none placeholder:text-white/20 focus:border-white/30"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Member email"
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none placeholder:text-white/20 focus:border-white/30"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black"
                >
                  Add to Team
                </button>
              </div>
            </form>
          )}

          {/* Progress */}
          <div className="mt-7">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
              <span className="text-white/25">
                Team Capacity
              </span>

              <span className="text-white/40">
                {members.length}/{maxMembers}
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{
                  width: `${(members.length / maxMembers) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Member List */}
          <div className="mt-7 space-y-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-black">
                    {member.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">
                        {member.name}
                      </p>

                      <span className="rounded-full border border-white/10 px-2 py-0.5 text-[8px] font-bold tracking-widest text-white/30">
                        {member.role}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-white/30">
                      {member.email}
                    </p>
                  </div>
                </div>

                {member.role !== "CAPTAIN" && (
                  <button
                    onClick={() => removeMember(member.id)}
                    className="w-fit text-xs font-semibold text-red-400/60 transition hover:text-red-400"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            {Array.from({
              length: maxMembers - members.length,
            }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="rounded-2xl border border-dashed border-white/10 p-4 text-center text-xs text-white/20"
              >
                Empty team slot
              </div>
            ))}
          </div>
        </section>

        {/* Competition Status */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/25">
                Competition Status
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Waiting for competition
              </h2>

              <p className="mt-2 text-sm text-white/35">
                Make sure your team is ready before the organizer starts
                the competition.
              </p>
            </div>

            <button
              onClick={() =>
                alert("Competition started for your team!")
              }
              className="w-fit rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Start Competition →
            </button>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/events/event"
            className="text-sm text-white/30 transition hover:text-white"
          >
            ← Back to event details
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 truncate text-sm font-bold">
        {value}
      </p>
    </div>
  );
}