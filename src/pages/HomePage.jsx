import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <section aria-labelledby="hero-title" className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-blush-500 shadow-sm ring-1 ring-blush-100">
          <span className="text-lg" aria-hidden="true">
            💗
          </span>
          <span>Turn “I&apos;m sorry” into something soft and kind.</span>
        </p>
        <div>
          <h1
            id="hero-title"
            className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Design a gentle apology card in minutes.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Apology Card Studio helps you write thoughtful, heartfelt apologies in a cozy, playful
            format. Personalize colors, words, and illustrations, then share a private link with
            someone who matters to you.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/create"
            className="inline-flex items-center justify-center rounded-full bg-blush-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 active:translate-y-px"
          >
            Start your apology
            <span className="ml-2 text-lg" aria-hidden="true">
              ➜
            </span>
          </Link>
          <p className="text-xs text-slate-500">
            No account needed. Just kindness, colors, and a bit of courage.
          </p>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-600 sm:text-xs md:max-w-lg">
          <div className="flex items-center gap-2 rounded-2xl bg-white/80 p-3 shadow-sm">
            <span className="text-lg" aria-hidden="true">
              🎨
            </span>
            <div>
              <dt className="font-semibold text-slate-800">Custom colors & layouts</dt>
              <dd>Soft, pastel cards designed to keep feelings gentle.</dd>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/80 p-3 shadow-sm">
            <span className="text-lg" aria-hidden="true">
              🔗
            </span>
            <div>
              <dt className="font-semibold text-slate-800">Shareable, read‑only links</dt>
              <dd>Let them view your apology without changing your words.</dd>
            </div>
          </div>
        </dl>
      </section>

      <section
        aria-label="Sample apology card illustration"
        className="relative hidden h-full items-center justify-center lg:flex"
      >
        <div className="relative w-full max-w-md">
          <div className="absolute -left-8 -top-8 h-16 w-16 rounded-3xl bg-white/70 shadow-sm" />
          <div className="absolute -right-10 top-10 h-20 w-20 rounded-full bg-blush-200/70 shadow-sm" />
          <div className="absolute -bottom-10 left-6 h-16 w-16 rounded-3xl bg-mint-200/70 shadow-sm" />

          <div className="relative rounded-card border border-white/80 bg-gradient-to-br from-blush-50 via-white to-mint-50 p-6 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-blush-100 text-2xl">
                  🐻
                </span>
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">“I&apos;m really sorry.”</p>
                  <p className="text-slate-500">
                    A small card, a big step toward repair.
                  </p>
                </div>
              </div>
              <span className="rounded-3xl bg-white/80 px-3 py-1 text-[11px] font-medium text-blush-500 shadow-sm">
                Live preview
              </span>
            </div>

            <div className="mt-5 space-y-2 rounded-3xl bg-white/80 p-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="text-lg" aria-hidden="true">
                  ✏️
                </span>
                <p>“I messed up, and that matters to me. I want to do better.”</p>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-500">
                <div className="rounded-2xl bg-blush-100/70 p-2">Gentle colors</div>
                <div className="rounded-2xl bg-mint-100/70 p-2">Soft layouts</div>
                <div className="rounded-2xl bg-slate-100/70 p-2">Kind wording</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

