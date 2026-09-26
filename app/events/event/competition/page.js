"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CompetitionPage() {
  const [seconds, setSeconds] = useState(10);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (seconds <= 0) {
      setStarted(true);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

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

          <span className="rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-[9px] font-bold tracking-widest text-green-400">
            LIVE SYSTEM
          </span>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
        {!started ? (
          <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/30">
              Competition Starting
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Get Ready
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/40">
              Zenith Quiz Arena is about to begin. Make sure every team
              member is ready.
            </p>

            <div className="mt-10 flex items-center gap-3 sm:gap-5">
              <CountdownBox
                value={String(minutes).padStart(2, "0")}
                label="Minutes"
              />

              <span className="text-3xl font-black text-white/20">
                :
              </span>

              <CountdownBox
                value={String(remainingSeconds).padStart(2, "0")}
                label="Seconds"
              />
            </div>

            <div className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-white transition-all duration-1000"
                style={{
                  width: `${Math.max(0, (seconds / 10) * 100)}%`,
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="rounded-3xl border border-green-400/20 bg-green-400/5 p-6 text-center sm:p-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-400">
                Competition Live
              </span>

              <h1 className="mt-4 text-4xl font-black sm:text-5xl">
                Round 1 Started
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/40">
                The qualification round is now active. Submit your answers
                before the timer reaches zero.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Info label="Round" value="01 / 03" />
              <Info label="Duration" value="30 Minutes" />
              <Info label="Questions" value="20" />
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/25">
                    Current Round
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Qualification
                  </h2>

                  <p className="mt-2 text-sm text-white/35">
                    Answer all questions and submit your team's response.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
                    Time
                  </p>

                  <p className="mt-1 font-mono text-xl font-black">
                    30:00
                  </p>
                </div>
              </div>

              <Link
                href="/events/event/competition/questions"
                className="mt-7 block rounded-2xl bg-white px-5 py-4 text-center text-sm font-bold text-black transition hover:bg-white/90"
              >
                Enter Round →
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div className="w-28 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:w-36 sm:p-7">
      <p className="font-mono text-4xl font-black sm:text-5xl">
        {value}
      </p>

      <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 text-sm font-bold">
        {value}
      </p>
    </div>
  );
}