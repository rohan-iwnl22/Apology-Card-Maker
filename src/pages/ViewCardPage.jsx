import React from "react";
import { useParams, Link } from "react-router-dom";
import CardPreview from "../components/CardPreview";
import { decodeState } from "../components/SharePanel";

function ViewCardPage() {
  const { encodedState } = useParams();
  const decoded = encodedState ? decodeState(encodedState) : null;

  if (!decoded) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
        <span className="text-4xl" aria-hidden="true">
          🧩
        </span>
        <h2 className="text-lg font-bold text-slate-900">This apology link looks broken.</h2>
        <p className="text-sm text-slate-600">
          The card data couldn&apos;t be read. The link may have been copied incorrectly or trimmed
          by a chat app.
        </p>
        <Link
          to="/create"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-blush-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-blush-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 active:translate-y-px"
        >
          Create a new apology card
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
      <header className="space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm ring-1 ring-slate-100">
          <span className="text-lg" aria-hidden="true">
            👋
          </span>
          <span>Someone sent you a gentle apology.</span>
        </p>
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Apology card</h2>
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
          This view is read‑only so you can focus on the message. If you&apos;d like to respond,
          you can always create your own card afterwards.
        </p>
      </header>

      <CardPreview
        title={decoded.title}
        message={decoded.message}
        from={decoded.from}
        background={decoded.background}
        accent={decoded.accent}
        fontFamily={decoded.fontFamily}
        align={decoded.align}
        imageDataUrl={decoded.imageDataUrl}
        imageUrl={decoded.imageUrl}
        stickers={decoded.stickers}
      />

      <Link
        to="/create"
        className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-50 shadow-soft transition hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:translate-y-px sm:text-sm"
      >
        Make your own apology card
      </Link>
    </div>
  );
}

export default ViewCardPage;

