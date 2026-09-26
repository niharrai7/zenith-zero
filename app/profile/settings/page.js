"use client";

import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Nihar M");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [competitionAlerts, setCompetitionAlerts] = useState(true);
  const [teamUpdates, setTeamUpdates] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="border-b border-white/10 bg-[#050505]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-black">
            ZENITH<span className="text-green-400"> ZERO</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:text-white"
            >
              ← Profile
            </Link>

            <Link
              href="/events"
              className="hidden rounded-xl bg-green-400 px-4 py-2 text-sm font-bold text-black sm:block"
            >
              Events
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Account Settings
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Customize your experience.
          </h1>

          <p className="mt-4 max-w-2xl text-white/50">
            Manage your participant profile, competition alerts, team updates
            and privacy preferences.
          </p>
        </div>

        {/* Profile */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Profile
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Personal information
          </h2>

          <div className="mt-6">
            <label className="mb-2 block text-sm text-white/50">
              Display Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-green-400/50"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-white/50">
              Email
            </label>

            <input
              value="mnihar100@gmail.com"
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/40"
            />
          </div>

          <p className="mt-3 text-xs text-white/30">
            Your account email cannot be changed from this page.
          </p>
        </div>

        {/* Notifications */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Notifications
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Stay updated
          </h2>

          <div className="mt-6 space-y-3">
            <SettingRow
              title="Email notifications"
              description="Receive important account and event updates."
              enabled={emailNotifications}
              setEnabled={setEmailNotifications}
            />

            <SettingRow
              title="Competition alerts"
              description="Get notified about rounds, countdowns and results."
              enabled={competitionAlerts}
              setEnabled={setCompetitionAlerts}
            />

            <SettingRow
              title="Team updates"
              description="Receive updates when your team changes."
              enabled={teamUpdates}
              setEnabled={setTeamUpdates}
            />
          </div>
        </div>

        {/* Privacy */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Privacy
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Profile visibility
          </h2>

          <div className="mt-6">
            <SettingRow
              title="Public participant profile"
              description="Allow other participants to see your competition profile."
              enabled={publicProfile}
              setEnabled={setPublicProfile}
            />
          </div>
        </div>

        {/* Competition Preferences */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
            Preferences
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Competition preferences
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <PreferenceCard
              title="Preferred format"
              value="Live competitions"
            />

            <PreferenceCard
              title="Preferred category"
              value="Technology"
            />

            <PreferenceCard
              title="Team preference"
              value="2–4 members"
            />

            <PreferenceCard
              title="Competition mode"
              value="Competitive"
            />
          </div>
        </div>

        {/* Save */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {saved && (
              <p className="text-sm font-semibold text-green-400">
                ✓ Settings saved successfully
              </p>
            )}
          </div>

          <button
            onClick={handleSave}
            className="rounded-2xl bg-green-400 px-8 py-4 font-bold text-black transition hover:bg-green-300"
          >
            Save Changes
          </button>
        </div>
      </section>
    </main>
  );
}

function SettingRow({
  title,
  description,
  enabled,
  setEnabled,
}) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-black/20 p-5">
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        aria-label={`Toggle ${title}`}
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          enabled ? "bg-green-400" : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function PreferenceCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-xs uppercase tracking-widest text-white/30">
        {title}
      </p>

      <p className="mt-2 font-semibold text-white/80">
        {value}
      </p>
    </div>
  );
}