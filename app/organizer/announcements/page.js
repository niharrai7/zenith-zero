"use client";

import Link from "next/link";
import { useState } from "react";

const initialAnnouncements = [
  {
    id: 1,
    title: "Round 03 starts in 10 minutes",
    message:
      "All teams should join the competition lobby and be ready before the round begins.",
    priority: "High",
    audience: "All Participants",
    time: "10 min ago",
  },
  {
    id: 2,
    title: "Leaderboard updated",
    message:
      "The latest competition scores and rankings are now available.",
    priority: "Normal",
    audience: "All Participants",
    time: "1 hour ago",
  },
];

export default function AnnouncementsPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [audience, setAudience] = useState("All Participants");
  const [announcements, setAnnouncements] = useState(
    initialAnnouncements
  );
  const [published, setPublished] = useState(false);

  function publishAnnouncement() {
    if (!title.trim() || !message.trim()) {
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title: title.trim(),
      message: message.trim(),
      priority,
      audience,
      time: "Just now",
    };

    setAnnouncements((current) => [
      newAnnouncement,
      ...current,
    ]);

    setTitle("");
    setMessage("");
    setPriority("Normal");
    setAudience("All Participants");
    setPublished(true);

    setTimeout(() => {
      setPublished(false);
    }, 3000);
  }

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
              href="/notifications"
              className="rounded-xl bg-green-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-green-300"
            >
              Notifications
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Organizer
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Announcements.
          </h1>

          <p className="mt-4 max-w-2xl text-white/50">
            Keep participants informed with important competition updates,
            reminders and event announcements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Composer */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
              New Announcement
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Publish an update
            </h2>

            <div className="mt-7">
              <label className="mb-2 block text-sm text-white/50">
                Title
              </label>

              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter announcement title"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition placeholder:text-white/25 focus:border-green-400/40"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-white/50">
                Message
              </label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your announcement..."
                rows={6}
                className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition placeholder:text-white/25 focus:border-green-400/40"
              />

              <p className="mt-2 text-right text-xs text-white/25">
                {message.length} characters
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Priority
                </label>

                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-green-400/40"
                >
                  <option>Normal</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">
                  Audience
                </label>

                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-green-400/40"
                >
                  <option>All Participants</option>
                  <option>Active Teams</option>
                  <option>Team Captains</option>
                  <option>Organizers</option>
                </select>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Preview
              </p>

              <h3 className="mt-3 font-bold">
                {title || "Announcement title"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                {message || "Your announcement message will appear here."}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  {priority}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                  {audience}
                </span>
              </div>
            </div>

            <button
              onClick={publishAnnouncement}
              disabled={!title.trim() || !message.trim()}
              className="mt-6 w-full rounded-2xl bg-green-400 px-5 py-4 font-bold text-black transition hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Publish Announcement
            </button>

            {published && (
              <p className="mt-4 text-center text-sm font-semibold text-green-400">
                ✓ Announcement published successfully
              </p>
            )}
          </div>

          {/* Recent Announcements */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                  Announcement History
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Recent updates
                </h2>
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                {announcements.length} total
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold">
                      {announcement.title}
                    </h3>

                    <PriorityBadge
                      priority={announcement.priority}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {announcement.message}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/30">
                    <span>{announcement.audience}</span>
                    <span>•</span>
                    <span>{announcement.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Link
            href="/organizer/participants"
            className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
          >
            <p className="font-semibold">Participants</p>
            <p className="mt-1 text-sm text-white/35">
              Manage registered participants
            </p>
          </Link>

          <Link
            href="/organizer/create/rounds"
            className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
          >
            <p className="font-semibold">Competition Rounds</p>
            <p className="mt-1 text-sm text-white/35">
              Configure event rounds
            </p>
          </Link>

          <Link
            href="/notifications"
            className="rounded-2xl border border-white/10 p-5 transition hover:border-green-400/30"
          >
            <p className="font-semibold">Participant View</p>
            <p className="mt-1 text-sm text-white/35">
              See the notification center
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

function PriorityBadge({ priority }) {
  const styles = {
    Normal:
      "border-white/10 bg-white/5 text-white/50",
    High:
      "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
    Urgent:
      "border-red-400/20 bg-red-400/10 text-red-300",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[priority]}`}
    >
      {priority}
    </span>
  );
}