"use client";

// ── ĐỔI SỐ ZALO CỦA BẠN TẠI ĐÂY ──────────────────────
const ZALO_PHONE = "0938875872";
// ────────────────────────────────────────────────────────

const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;

export default function ChatButton() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 group flex flex-col items-end gap-1.5 sm:gap-2">
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ qua Zalo"
        className="bg-primary text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-primary/30 transition-all duration-300"
      >
        <span className="material-symbols-outlined text-lg sm:text-xl">chat_bubble</span>
      </a>
    </div>
  );
}
