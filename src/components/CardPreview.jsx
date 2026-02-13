import React from "react";

function CardPreview({
  title,
  message,
  from,
  background,
  accent,
  fontFamily,
  align,
  imageDataUrl,
  imageUrl,
  stickers,
}) {
  const resolvedImage = imageDataUrl || imageUrl || "";

  return (
    <section
      aria-label="Apology card preview"
      className="flex w-full flex-col items-center gap-3"
    >
      <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
          👀
        </span>
        <span>Live preview</span>
      </div>

      <div
        className="relative w-full max-w-md rounded-card border border-white/70 bg-white/80 p-5 shadow-soft transition hover:shadow-xl sm:p-7"
        style={{
          background,
          fontFamily,
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-card border border-white/40" />

        {stickers?.corner && (
          <div className="pointer-events-none absolute -top-4 -left-2 text-3xl" aria-hidden="true">
            {stickers.corner}
          </div>
        )}
        {stickers?.floating && (
          <div
            className="pointer-events-none absolute -right-1 top-6 animate-bounce-slow text-3xl"
            aria-hidden="true"
          >
            {stickers.floating}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-2xl text-xl shadow-sm"
              style={{ backgroundColor: accent }}
              aria-hidden="true"
            >
              💌
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              I&apos;m really sorry
            </p>
          </div>

          <h2
            className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl"
            style={{ textAlign: align }}
          >
            {title || "I messed up, and I’m really sorry."}
          </h2>

          <p
            className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base"
            style={{ textAlign: align }}
          >
            {message ||
              "I’ve been thinking about what happened and I truly regret it. You matter a lot to me, and I’d love the chance to make things feel gentle and okay again, at your pace."}
          </p>

          {resolvedImage && (
            <div className="mt-4 overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-inner">
              <img
                src={resolvedImage}
                alt="Custom illustration for the apology card"
                className="h-44 w-full object-cover sm:h-56"
              />
            </div>
          )}

          <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="text-lg" aria-hidden="true">
                ☁️
              </span>
              <span>A tiny cloud of softness is on its way to you.</span>
            </div>
            {from && (
              <p className="font-semibold text-slate-800" style={{ textAlign: "right" }}>
                — {from}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardPreview;

