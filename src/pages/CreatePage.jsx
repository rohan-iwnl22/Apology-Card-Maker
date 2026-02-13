import React, { useState } from "react";
import CardPreview from "../components/CardPreview";
import TemplateGallery from "../components/TemplateGallery";
import SharePanel from "../components/SharePanel";

const defaultState = {
  title: "",
  message: "",
  from: "",
  background: "linear-gradient(145deg,#ffeef4,#e8f8f3)",
  accent: "#ff9ab8",
  fontFamily: '"Nunito", system-ui, sans-serif',
  align: "left",
  templateId: "soft-pastel",
  imageUrl: "",
  imageDataUrl: "",
  stickers: { corner: "🌸", floating: "💫" },
};

function CreatePage() {
  const [card, setCard] = useState(() => {
    const stored = window.localStorage.getItem("apology-card-draft");
    if (stored) {
      try {
        return { ...defaultState, ...JSON.parse(stored) };
      } catch {
        return defaultState;
      }
    }
    return defaultState;
  });

  const updateCard = (patch) => {
    setCard((prev) => {
      const next = { ...prev, ...patch };
      window.localStorage.setItem("apology-card-draft", JSON.stringify(next));
      return next;
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        updateCard({ imageDataUrl: result, imageUrl: "" });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-start">
      <section className="w-full space-y-6 lg:w-[60%]" aria-label="Card creator controls">
        <header className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            Craft your apology card
          </h2>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            Choose a template, write your message, and adjust the design. Your card updates in real
            time, so you can tweak until it feels just right.
          </p>
        </header>

        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-4 shadow-soft sm:p-5">
          <TemplateGallery
            value={card.templateId}
            onChange={(tpl) =>
              updateCard({
                templateId: tpl.templateId,
                background: tpl.background,
                accent: tpl.accent,
                fontFamily: tpl.fontFamily,
                stickers: tpl.stickers,
              })
            }
          />

          <section aria-label="Text customization" className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-800">Words & tone</h3>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="title"
                  className="text-xs font-medium text-slate-700"
                >
                  Card title
                </label>
                <input
                  id="title"
                  type="text"
                  maxLength={120}
                  value={card.title}
                  onChange={(e) => updateCard({ title: e.target.value })}
                  className="h-9 w-full rounded-full border border-slate-200 bg-slate-50/80 px-3 text-sm text-slate-800 outline-none transition focus:border-blush-300 focus:bg-white focus:ring-2 focus:ring-blush-200"
                  placeholder="e.g. I’m really sorry I hurt your feelings"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-700"
                >
                  Main message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={card.message}
                  onChange={(e) => updateCard({ message: e.target.value })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blush-300 focus:bg-white focus:ring-2 focus:ring-blush-200"
                  placeholder="Share what happened, how you feel about it, and what you hope for moving forward."
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="from"
                    className="text-xs font-medium text-slate-700"
                  >
                    Signature (optional)
                  </label>
                  <input
                    id="from"
                    type="text"
                    maxLength={60}
                    value={card.from}
                    onChange={(e) => updateCard({ from: e.target.value })}
                    className="h-9 w-full rounded-full border border-slate-200 bg-slate-50/80 px-3 text-sm text-slate-800 outline-none transition focus:border-blush-300 focus:bg-white focus:ring-2 focus:ring-blush-200"
                    placeholder="e.g. — Sam"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-slate-700">Alignment</span>
                  <div className="inline-flex h-9 items-center gap-1 rounded-full bg-slate-50 p-1">
                    {["left", "center", "right"].map((align) => (
                      <button
                        key={align}
                        type="button"
                        onClick={() => updateCard({ align })}
                        className={`flex h-7 w-16 items-center justify-center rounded-full text-[11px] font-medium capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 ${
                          card.align === align
                            ? "bg-white text-blush-600 shadow-sm"
                            : "text-slate-500 hover:bg-white/80"
                        }`}
                        aria-pressed={card.align === align}
                      >
                        {align}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Image options" className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-800">Illustration</h3>
              <button
                type="button"
                className="text-[11px] font-medium text-blush-500 underline-offset-2 hover:underline"
                onClick={() => updateCard({ imageDataUrl: "", imageUrl: "" })}
              >
                Remove image
              </button>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-600">
              For safety, please only use images you have the rights to share. Public‑domain or
              Creative Commons photos from{" "}
              <span className="font-semibold">Unsplash</span>,{" "}
              <span className="font-semibold">Pexels</span>, or{" "}
              <span className="font-semibold">Pixabay</span> are great options. Avoid uploading
              faces or anything that could be sensitive.
            </p>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
              <div className="space-y-1.5">
                <label
                  htmlFor="image-url"
                  className="text-xs font-medium text-slate-700"
                >
                  Image URL
                </label>
                <input
                  id="image-url"
                  type="url"
                  value={card.imageUrl}
                  onChange={(e) => updateCard({ imageUrl: e.target.value, imageDataUrl: "" })}
                  className="h-9 w-full rounded-full border border-slate-200 bg-slate-50/80 px-3 text-xs text-slate-800 outline-none transition focus:border-blush-300 focus:bg-white focus:ring-2 focus:ring-blush-200"
                  placeholder="Paste a direct image link from a safe source"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="image-file"
                  className="text-xs font-medium text-slate-700"
                >
                  Upload image
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="image-file"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full cursor-pointer rounded-full border border-slate-200 bg-slate-50/80 text-[11px] file:mr-3 file:rounded-full file:border-0 file:bg-blush-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-blush-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-200"
                    aria-describedby="image-guidance"
                  />
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Design customization" className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-800">Design details</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="background"
                  className="text-xs font-medium text-slate-700"
                >
                  Background color
                </label>
                <input
                  id="background"
                  type="color"
                  value={
                    /^#/.test(card.background)
                      ? card.background
                      : "#ffeef4"
                  }
                  onChange={(e) =>
                    updateCard({
                      background: e.target.value,
                    })
                  }
                  className="h-9 w-full cursor-pointer rounded-full border border-slate-200 bg-slate-50/80 p-1"
                  aria-label="Choose card background color"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="accent"
                  className="text-xs font-medium text-slate-700"
                >
                  Accent color
                </label>
                <input
                  id="accent"
                  type="color"
                  value={card.accent}
                  onChange={(e) => updateCard({ accent: e.target.value })}
                  className="h-9 w-full cursor-pointer rounded-full border border-slate-200 bg-slate-50/80 p-1"
                  aria-label="Choose accent color"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-medium text-slate-700">Font vibe</span>
                <select
                  value={card.fontFamily}
                  onChange={(e) => updateCard({ fontFamily: e.target.value })}
                  className="h-9 w-full rounded-full border border-slate-200 bg-slate-50/80 px-3 text-xs text-slate-800 outline-none transition focus:border-blush-300 focus:bg-white focus:ring-2 focus:ring-blush-200"
                >
                  <option value='"Nunito", system-ui, sans-serif'>Soft & rounded (Nunito)</option>
                  <option value='"Poppins", system-ui, sans-serif'>Clean & bold (Poppins)</option>
                  <option value='"Quicksand", system-ui, sans-serif'>Playful (Quicksand)</option>
                </select>
              </div>
            </div>
          </section>

          <SharePanel cardState={card} />
        </div>
      </section>

      <div className="w-full lg:w-[40%]">
        <CardPreview
          title={card.title}
          message={card.message}
          from={card.from}
          background={card.background}
          accent={card.accent}
          fontFamily={card.fontFamily}
          align={card.align}
          imageDataUrl={card.imageDataUrl}
          imageUrl={card.imageUrl}
          stickers={card.stickers}
        />
      </div>
    </div>
  );
}

export default CreatePage;

