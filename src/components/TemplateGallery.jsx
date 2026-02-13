import React from "react";

const templates = [
  {
    id: "soft-pastel",
    name: "Soft pastel",
    description: "Gentle gradient with soft edges",
    previewBg: "linear-gradient(135deg,#ffe4ec,#e0f7f2)",
    background: "linear-gradient(145deg,#ffeef4,#e8f8f3)",
    accent: "#ff9ab8",
    fontFamily: '"Nunito", system-ui, sans-serif',
    stickers: { corner: "🌸", floating: "💫" },
  },
  {
    id: "mint-clouds",
    name: "Minty clouds",
    description: "Light mint with floating clouds",
    previewBg: "linear-gradient(145deg,#d4f5e3,#fdfbff)",
    background: "linear-gradient(145deg,#e4fbf0,#fdfbff)",
    accent: "#75d9aa",
    fontFamily: '"Quicksand", system-ui, sans-serif',
    stickers: { corner: "☁️", floating: "✨" },
  },
  {
    id: "sunny-sorry",
    name: "Sunny sorry",
    description: "Playful warm tones",
    previewBg: "linear-gradient(145deg,#fff4d7,#ffd4e5)",
    background: "linear-gradient(145deg,#fff8de,#ffe3ef)",
    accent: "#ffb347",
    fontFamily: '"Poppins", system-ui, sans-serif',
    stickers: { corner: "🌈", floating: "🐻" },
  },
  {
    id: "minimal",
    name: "Minimal calm",
    description: "Clean and simple layout",
    previewBg: "#f9fafb",
    background: "#f9fafb",
    accent: "#94a3b8",
    fontFamily: '"Nunito", system-ui, sans-serif',
    stickers: { corner: "💗", floating: "⭐" },
  },
];

function TemplateGallery({ value, onChange }) {
  return (
    <section aria-label="Apology card templates" className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-800">Template styles</h3>
        <p className="text-[11px] text-slate-500">Tap a style to load colors & stickers</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {templates.map((tpl) => {
          const isActive = value === tpl.id;
          return (
            <button
              key={tpl.id}
              type="button"
              onClick={() =>
                onChange({
                  templateId: tpl.id,
                  background: tpl.background,
                  accent: tpl.accent,
                  fontFamily: tpl.fontFamily,
                  stickers: tpl.stickers,
                })
              }
              className={`group flex flex-col gap-1 rounded-2xl border bg-white/80 p-2 text-left text-xs shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 ${
                isActive
                  ? "border-blush-300 ring-1 ring-blush-200"
                  : "border-slate-100 hover:border-blush-200 hover:bg-blush-50/40"
              }`}
              aria-pressed={isActive}
            >
              <div
                className="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-white/70 shadow-inner"
                style={{ background: tpl.previewBg }}
                aria-hidden="true"
              >
                <span className="text-lg">{tpl.stickers.corner}</span>
                <span className="ml-1 text-base">{tpl.stickers.floating}</span>
              </div>
              <span className="mt-1 font-semibold text-slate-800">{tpl.name}</span>
              <span className="text-[11px] text-slate-500">{tpl.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TemplateGallery;

