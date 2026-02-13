import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-50 via-slate-50 to-mint-50">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-blush-100 opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-mint-100 opacity-80 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-purple-100 opacity-70 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/70 bg-white/70 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-blush-500 shadow-sm ring-1 ring-blush-100 transition hover:bg-blush-50 hover:text-blush-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blush-100 text-lg">
              💌
            </span>
            <span className="hidden xs:inline">Apology Card Studio</span>
            <span className="xs:hidden">Apology Studio</span>
          </Link>

          <div className="flex items-center gap-2 text-xs sm:text-sm">
            {!isHome && (
              <Link
                to="/"
                className="rounded-full px-3 py-1 font-medium text-slate-500 transition hover:bg-white hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                Home
              </Link>
            )}
            <Link
              to="/create"
              className="rounded-full bg-blush-500 px-4 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:bg-blush-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 active:translate-y-px"
            >
              Create a card
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-1 flex-col px-4 pb-10 pt-6 sm:px-6 sm:pt-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/70 bg-white/60 text-center text-[11px] text-slate-400 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <p>
            Made to help you say{" "}
            <span className="font-semibold text-blush-400">“I&apos;m sorry”</span> a little more
            gently.
          </p>
          <p className="hidden sm:block">
            Please use kind, respectful language in your cards. 💕
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

