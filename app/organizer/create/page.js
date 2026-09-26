"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Technical Challenge");
  const [format, setFormat] = useState("Live Competition");
  const [teamSize, setTeamSize] = useState("2 - 4");
  const [maxTeams, setMaxTeams] = useState("20");
  const [deadline, setDeadline] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!eventName.trim()) {
      alert("Please enter an event name.");
      return;
    }

    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            ZENITH<span className="text-white/40">ZERO</span>
          </Link>

          <Link
            href="/organizer"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Dashboard
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
            Organizer Console
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Create Event
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
            Configure your competition, define participation rules and
            prepare your event for registration.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Basic Information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Step 01
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Basic Information
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Tell participants what your competition is about.
              </p>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <label className="text-xs font-semibold text-white/60">
                  Event Name
                </label>

                <input
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="e.g. Zenith Quiz Arena"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your competition..."
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none transition placeholder:text-white/20 focus:border-white/30"
                />
              </div>
            </div>
          </div>

          {/* Competition Settings */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Step 02
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Competition Settings
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Define how your competition will be conducted.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-white/60">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm outline-none focus:border-white/30"
                >
                  <option>Technical Challenge</option>
                  <option>Hackathon</option>
                  <option>Quiz</option>
                  <option>Cyber Security</option>
                  <option>Trivia</option>
                  <option>Workshop</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Format
                </label>

                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm outline-none focus:border-white/30"
                >
                  <option>Live Competition</option>
                  <option>Timed Competition</option>
                  <option>Self Paced</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Team Size
                </label>

                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3.5 text-sm outline-none focus:border-white/30"
                >
                  <option>Individual</option>
                  <option>2 - 4</option>
                  <option>2 - 5</option>
                  <option>3 - 6</option>
                  <option>4 - 8</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">
                  Maximum Teams
                </label>

                <input
                  type="number"
                  min="1"
                  value={maxTeams}
                  onChange={(e) => setMaxTeams(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none focus:border-white/30"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-semibold text-white/60">
                  Registration Deadline
                </label>

                <input
                  type="datetime-local"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm outline-none focus:border-white/30"
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Live Preview
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Event Card
              </h2>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
                  OPEN
                </span>

                <span className="text-xs text-white/30">
                  {category}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black">
                {eventName || "Your Event Name"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {description ||
                  "Your event description will appear here."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Info label="Format" value={format} />
                <Info label="Team Size" value={teamSize} />
                <Info label="Max Teams" value={maxTeams} />
                <Info
                  label="Deadline"
                  value={deadline ? "Scheduled" : "Not set"}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/organizer"
              className="rounded-2xl border border-white/10 px-6 py-3.5 text-center text-sm font-semibold text-white/60 transition hover:border-white/20 hover:text-white"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
            >
              {saved ? "Event Saved ✓" : "Save Event →"}
            </button>
          </div>

          {saved && (
            <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-4 text-center text-sm text-green-400">
              Event configuration saved successfully. You can now manage
              competition rounds.
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-1 truncate text-xs font-semibold text-white/70">
        {value}
      </p>
    </div>
  );
}