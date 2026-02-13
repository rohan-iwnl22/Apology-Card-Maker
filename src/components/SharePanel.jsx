import React, { useEffect, useState } from "react";

function encodeState(state) {
  const json = JSON.stringify(state);
  const base64 = btoa(unescape(encodeURIComponent(json)));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeState(encoded) {
  try {
    const padded =
      encoded + "===".slice(((encoded.length + 3) % 4) || 0); // restore padding if needed
    const json = decodeURIComponent(escape(atob(padded.replace(/-/g, "+").replace(/_/g, "/"))));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function Confetti({ active }) {
  if (!active) return null;

  const pieces = Array.from({ length: 30 });
  const colors = ["#ff9ab8", "#75d9aa", "#ffb347", "#a5b4fc", "#f472b6"];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 flex items-start justify-center overflow-hidden"
    >
      <div className="relative h-40 w-full max-w-3xl">
        {pieces.map((_, index) => {
          const left = 5 + (index * 3) % 90;
          const delay = (index % 5) * 80;
          const size = 6 + (index % 4) * 2;
          const color = colors[index % colors.length];
          return (
            <span
              key={index}
              className="pointer-events-none absolute animate-confetti rounded-full"
              style={{
                left: `${left}%`,
                top: "-10px",
                width: size,
                height: size,
                backgroundColor: color,
                animationDelay: `${delay}ms`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function SharePanel({ cardState }) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let timeout;
    if (showConfetti) {
      timeout = setTimeout(() => setShowConfetti(false), 1600);
    }
    return () => timeout && clearTimeout(timeout);
  }, [showConfetti]);

  const handleGenerate = () => {
    const encoded = encodeState(cardState);
    const url = `${window.location.origin}/card/${encoded}`;
    setShareUrl(url);
    setCopied(false);
    setShowConfetti(true);
  };

  const handleCopy = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Confetti active={showConfetti} />
      <section aria-label="Share your apology card" className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">Shareable link</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          When you&apos;re ready, generate a private link you can send. It will include your text,
          colors, and image so the other person sees this card exactly as you designed it.
        </p>

        <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white/80 p-3 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center justify-center rounded-full bg-mint-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-mint-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300 active:translate-y-px sm:text-sm"
            >
              <span className="mr-1.5 text-base" aria-hidden="true">
                ✨
              </span>
              Generate share link
            </button>
            <div className="flex flex-1 items-center gap-2">
              <input
                type="url"
                readOnly
                value={shareUrl}
                aria-label="Shareable link"
                placeholder="Your link will appear here after you generate it"
                className="h-9 flex-1 rounded-full border border-slate-200 bg-slate-50/80 px-3 text-xs text-slate-700 outline-none focus:border-blush-300 focus:bg-white focus:ring-2 focus:ring-blush-200"
              />
              <button
                type="button"
                onClick={handleCopy}
                disabled={!shareUrl}
                className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 shadow-sm transition enabled:hover:bg-blush-50 enabled:hover:text-blush-600 enabled:focus-visible:outline-none enabled:focus-visible:ring-2 enabled:focus-visible:ring-blush-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">
            Your design is stored in the link itself, not on a server. Anyone with the link can view
            the card, but they can&apos;t edit your original.
          </p>
        </div>
      </section>
    </>
  );
}

export default SharePanel;

