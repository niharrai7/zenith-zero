"use client";

import { useState } from "react";
import Link from "next/link";

const initialNotifications = [
  {
    id: 1,
    type: "LIVE",
    title: "Round 01 is now live",
    message:
      "The Zenith Quiz Arena qualification round has started. Submit your answers before the timer ends.",
    time: "Just now",
    unread: true,
  },
  {
    id: 2,
    type: "UPDATE",
    title: "Leaderboard updated",
    message:
      "The live leaderboard has been refreshed with the latest team scores.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "TEAM",
    title: "Team lobby ready",
    message:
      "Your team Zenith Zero has successfully joined the competition.",
    time: "8 min ago",
    unread: false,
  },
  {
    id: 4,
    type: "EVENT",
    title: "Registration confirmed",
    message:
      "Your registration for Zenith Quiz Arena has been confirmed.",
    time: "15 min ago",
    unread: false,
  },
  {
    id: 5,
    type: "INFO",
    title: "Competition instructions",
    message:
      "Make sure every team member is ready before the next round begins.",
    time: "20 min ago",
    unread: false,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("ALL");

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications =
    filter === "ALL"
      ? notifications
      : notifications.filter(
          (notification) => notification.type === filter
        );

  function markAllRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  }

  function markRead(id) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
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

          <div className="flex items-center gap-3">
            <span className="hidden text-[9px] font-bold uppercase tracking-widest text-white/25 sm:block">
              Participant Center
            </span>

            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                🔔
              </div>

              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-green-400 px-1 text-[8px] font-black text-black">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-green-400">
              Activity Center
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Notifications
            </h1>

            <p className="mt-3 text-sm text-white/35">
              Stay updated with your competitions, teams and events.
            </p>
          </div>

          <button
            onClick={markAllRead}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold transition hover:bg-white/[0.07]"
          >
            Mark all as read
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatusCard
            label="Unread"
            value={unreadCount}
            description="New updates"
          />

          <StatusCard
            label="Competition"
            value="LIVE"
            description="Zenith Quiz Arena"
            live
          />

          <StatusCard
            label="Team"
            value="#3"
            description="Current position"
          />
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto border-b border-white/10 pb-3">
          {["ALL", "LIVE", "UPDATE", "TEAM", "EVENT", "INFO"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded-xl px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition ${
                  filter === item
                    ? "bg-white text-black"
                    : "border border-white/10 text-white/30 hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="mt-5 space-y-3">
          {filteredNotifications.map((notification) => (
            <button
              key={notification.id}
              onClick={() => markRead(notification.id)}
              className={`w-full rounded-3xl border p-5 text-left transition hover:bg-white/[0.05] sm:p-6 ${
                notification.unread
                  ? "border-green-400/15 bg-green-400/[0.03]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex gap-4">
                <NotificationIcon type={notification.type} />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div className="flex items-center gap-3">
                      <h2 className="font-bold">
                        {notification.title}
                      </h2>

                      {notification.unread && (
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                      )}
                    </div>

                    <span className="shrink-0 text-[9px] font-bold uppercase tracking-widest text-white/20">
                      {notification.time}
                    </span>
                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
                    {notification.message}
                  </p>

                  <span className="mt-3 inline-block rounded-full border border-white/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-white/25">
                    {notification.type}
                  </span>
                </div>
              </div>
            </button>
          ))}

          {filteredNotifications.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
              <p className="text-2xl">✓</p>

              <h2 className="mt-3 font-bold">
                No notifications
              </h2>

              <p className="mt-2 text-sm text-white/30">
                You&apos;re all caught up.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
                Competition Status
              </p>

              <h2 className="mt-2 text-xl font-black">
                Zenith Quiz Arena
              </h2>

              <p className="mt-1 text-xs text-white/30">
                Qualification round currently active
              </p>
            </div>

            <Link
              href="/events/event/competition"
              className="rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-white/90"
            >
              Open Competition →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatusCard({ label, value, description, live }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <p
          className={`text-2xl font-black ${
            live ? "text-green-400" : ""
          }`}
        >
          {value}
        </p>

        {live && (
          <span className="h-2 w-2 rounded-full bg-green-400" />
        )}
      </div>

      <p className="mt-1 text-[10px] text-white/25">
        {description}
      </p>
    </div>
  );
}

function NotificationIcon({ type }) {
  const icons = {
    LIVE: "⚡",
    UPDATE: "↻",
    TEAM: "◈",
    EVENT: "◆",
    INFO: "i",
  };

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-sm font-black ${
        type === "LIVE"
          ? "border-green-400/20 bg-green-400/10 text-green-400"
          : "border-white/10 bg-black/20 text-white/40"
      }`}
    >
      {icons[type]}
    </div>
  );
}