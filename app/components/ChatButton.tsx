"use client";

// ── ĐỔI SỐ ZALO CỦA BẠN TẠI ĐÂY ──────────────────────
const ZALO_PHONE = "0938875872";
// ────────────────────────────────────────────────────────

const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;

export default function ChatButton() {
  return (
    <div className="fixed bottom-8 right-8 z-40 group flex flex-col items-end gap-2">
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 bg-brand-brown text-background-light text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 pointer-events-none whitespace-nowrap">
        Chat Zalo
      </span>

      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ qua Zalo"
        className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-primary/30 transition-all duration-300"
      >
        <span className="material-symbols-outlined">chat_bubble</span>
      </a>
    </div>
  );
}
