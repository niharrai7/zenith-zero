"use client";

import { useState } from "react";

const initialEvents = [
  {
    id: 1,
    name: "Zenith Quiz Arena",
    type: "Quiz",
    status: "Live",
    participants: 96,
    teams: 24,
    start: "Sep 26, 2026",
    end: "Sep 26, 2026",
  },
  {
    id: 2,
    name: "Code Sprint",
    type: "Coding",
    status: "Registration",
    participants: 42,
    teams: 14,
    start: "Sep 28, 2026",
    end: "Sep 29, 2026",
  },
  {
    id: 3,
    name: "AI Innovation Challenge",
    type: "AI",
    status: "Upcoming",
    participants: 28,
    teams: 8,
    start: "Oct 3, 2026",
    end: "Oct 4, 2026",
  },
  {
    id: 4,
    name: "Cyber Defense Cup",
    type: "Cybersecurity",
    status: "Completed",
    participants: 64,
    teams: 16,
    start: "Sep 18, 2026",
    end: "Sep 19, 2026",
  },
];

const statuses = [
  {
    name: "Upcoming",
    description: "Event has not opened for participants yet.",
    color: "text-blue-400",
    dot: "bg-blue-400",
  },
  {
    name: "Registration",
    description: "Participants can register and form teams.",
    color: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  {
    name: "Live",
    description: "The competition is currently active.",
    color: "text-green-400",
    dot: "bg-green-400",
  },
  {
    name: "Completed",
    description: "Competition has ended and results are available.",
    color: "text-purple-400",
    dot: "bg-purple-400",
  },
];

function getStatusStyle(status) {
  switch (status) {
    case "Live":
      return "bg-green-400/10 text-green-400 border-green-400/20";
    case "Registration":
      return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";
    case "Completed":
      return "bg-purple-400/10 text-purple-400 border-purple-400/20";
    default:
      return "bg-blue-400/10 text-blue-400 border-blue-400/20";
  }
}

export default function EventStatusPage() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedId, setSelectedId] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("Live");
  const [saved, setSaved] = useState(false);

  const selectedEvent = events.find((event) => event.id === selectedId);

  const handleEventChange = (id) => {
    const event = events.find((item) => item.id === Number(id));

    setSelectedId(Number(id));
    setSelectedStatus(event.status);
    setSaved(false);
  };

  const updateStatus = () => {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.id === selectedId
          ? { ...event, status: selectedStatus }
          : event
      )
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-6 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Organizer Control Center
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Event Status Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
              Control the lifecycle of your competitions and keep participants
              updated with the current event state.
            </p>
          </div>

          <a
            href="/organizer"
            className="inline-flex w-fit items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            ← Organizer Dashboard
          </a>
        </div>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Total Events
            </p>
            <p className="mt-2 text-3xl font-bold">{events.length}</p>
          </div>

          <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.04] p-5">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Live
            </p>
            <p className="mt-2 text-3xl font-bold text-green-400">
              {events.filter((event) => event.status === "Live").length}
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.04] p-5">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Registration
            </p>
            <p className="mt-2 text-3xl font-bold text-yellow-400">
              {events.filter((event) => event.status === "Registration").length}
            </p>
          </div>

          <div className="rounded-2xl border border-purple-400/10 bg-purple-400/[0.04] p-5">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Completed
            </p>
            <p className="mt-2 text-3xl font-bold text-purple-400">
              {events.filter((event) => event.status === "Completed").length}
            </p>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Event selector */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="mb-6">
              <p className="text-lg font-semibold">Select Event</p>
              <p className="mt-1 text-sm text-white/40">
                Choose an event to manage its current lifecycle status.
              </p>
            </div>

            <div className="space-y-3">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => handleEventChange(event.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    selectedId === event.id
                      ? "border-green-400/30 bg-green-400/[0.06]"
                      : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-semibold">{event.name}</h2>

                        <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/40">
                          {event.type}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-4 text-xs text-white/40">
                        <span>{event.participants} participants</span>
                        <span>{event.teams} teams</span>
                        <span>
                          {event.start} → {event.end}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Status controller */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="mb-6">
              <p className="text-lg font-semibold">Update Status</p>
              <p className="mt-1 text-sm text-white/40">
                Change the participant-facing state of the selected event.
              </p>
            </div>

            <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wider text-white/30">
                Selected Event
              </p>

              <p className="mt-2 text-lg font-semibold">
                {selectedEvent?.name}
              </p>

              <p className="mt-1 text-sm text-white/40">
                Current status:{" "}
                <span className="text-white/70">{selectedEvent?.status}</span>
              </p>
            </div>

            <div className="space-y-3">
              {statuses.map((status) => (
                <button
                  key={status.name}
                  onClick={() => {
                    setSelectedStatus(status.name);
                    setSaved(false);
                  }}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    selectedStatus === status.name
                      ? "border-green-400/30 bg-green-400/[0.05]"
                      : "border-white/10 bg-black/20 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${status.dot}`}
                    />

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className={`font-medium ${status.color}`}>
                          {status.name}
                        </p>

                        {selectedStatus === status.name && (
                          <span className="text-xs text-green-400">
                            Selected
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-xs leading-5 text-white/40">
                        {status.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={updateStatus}
              className="mt-5 w-full rounded-2xl bg-green-400 px-5 py-3.5 text-sm font-bold text-black transition hover:bg-green-300 active:scale-[0.99]"
            >
              {saved ? "✓ Status Updated" : "Save Event Status"}
            </button>
          </section>
        </div>

        {/* Lifecycle */}
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="mb-7">
            <p className="text-lg font-semibold">Event Lifecycle</p>
            <p className="mt-1 text-sm text-white/40">
              Recommended lifecycle for a competition.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {statuses.map((status, index) => (
              <div key={status.name} className="relative">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${status.dot}/10`}
                    >
                      <span
                        className={`h-3 w-3 rounded-full ${status.dot}`}
                      />
                    </div>

                    <div>
                      <p className={`font-semibold ${status.color}`}>
                        {status.name}
                      </p>
                      <p className="text-xs text-white/30">
                        Stage {index + 1}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-white/40">
                    {status.description}
                  </p>
                </div>

                {index < statuses.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-px w-6 bg-white/10 md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Participant preview */}
        <section className="mt-6 rounded-3xl border border-green-400/10 bg-green-400/[0.03] p-5 sm:p-6">
          <div className="mb-6">
            <p className="text-lg font-semibold">Participant Preview</p>
            <p className="mt-1 text-sm text-white/40">
              This is how the current event state can be communicated to
              participants.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Event Status
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold">
                    {selectedEvent?.name}
                  </h3>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                      selectedStatus
                    )}`}
                  >
                    {selectedStatus}
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-white/30">Participants</p>
                <p className="mt-1 text-lg font-semibold">
                  {selectedEvent?.participants}
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-sm leading-6 text-white/60">
                {selectedStatus === "Upcoming" &&
                  "Registration has not started yet. Stay tuned for the event opening."}

                {selectedStatus === "Registration" &&
                  "Registration is currently open. Join or create a team before the registration deadline."}

                {selectedStatus === "Live" &&
                  "The competition is live now. Participants can enter the competition and complete the active rounds."}

                {selectedStatus === "Completed" &&
                  "This competition has ended. Final results and rankings are now available."}
              </p>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href="/organizer/participants"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <p className="font-semibold">Participants</p>
            <p className="mt-1 text-xs text-white/40">
              Manage registrations and teams
            </p>
          </a>

          <a
            href="/organizer/announcements"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <p className="font-semibold">Announcements</p>
            <p className="mt-1 text-xs text-white/40">
              Notify participants about changes
            </p>
          </a>

          <a
            href="/organizer/create/rounds"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <p className="font-semibold">Round Management</p>
            <p className="mt-1 text-xs text-white/40">
              Configure competition rounds
            </p>
          </a>
        </section>
      </div>
    </main>
  );
}