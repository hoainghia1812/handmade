"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ── ĐỔI SỐ ZALO CỦA BẠN TẠI ĐÂY ──────────────────────
const ZALO_PHONE = "0938875872"; 
// ────────────────────────────────────────────────────────

const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;
const QR_URL   = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=543D2D&bgcolor=F5EFE1&qzone=1&data=${encodeURIComponent(ZALO_URL)}`;

export default function ChatButton() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setOpen(true);
    } else {
      window.open(ZALO_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* ── Floating button ─────────────────────────── */}
      <div className="fixed bottom-8 right-8 z-40 group flex flex-col items-end gap-2">
        {/* Tooltip */}
        <span className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 bg-brand-brown text-background-light text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 pointer-events-none whitespace-nowrap">
          Chat Zalo
        </span>

        <button
          onClick={handleClick}
          aria-label="Liên hệ qua Zalo"
          className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-primary/30 transition-all duration-300"
        >
          <span className="material-symbols-outlined">chat_bubble</span>
        </button>
      </div>

      {/* ── Business card modal (mobile) ─────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[340px] animate-[heroIn_0.4s_cubic-bezier(0.22,1,0.36,1)_both]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-11 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-1 text-[11px] tracking-widest uppercase"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
              Đóng
            </button>

            {/* ── Danh thiếp ── */}
            <div className="bg-background-light dark:bg-[#1e1916] shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">

              {/* Top gold bar */}
              <div className="h-[3px] bg-linear-to-r from-primary/40 via-primary to-primary/40" />

              {/* Header area */}
              <div className="bg-brand-brown dark:bg-[#120f0d] px-8 pt-8 pb-6 text-center">
                <p className="text-primary tracking-[0.45em] uppercase text-[9px] font-semibold mb-2">
                  Handmade Luxury
                </p>
                <h2 className="font-display text-4xl font-bold tracking-tighter text-background-light leading-none">
                  MUSH &amp; CO.
                </h2>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-white/30 text-[8px] tracking-[0.3em] uppercase">Zalo</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
              </div>

              {/* QR area */}
              <div className="px-8 py-7 flex flex-col items-center gap-5">
                <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 text-center">
                  Quét mã để nhắn tin
                </p>

                {/* QR frame */}
                <div className="relative p-1 border border-brand-brown/20 dark:border-white/10 shadow-inner">
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />

                  <Image
                    src={QR_URL}
                    alt="Zalo QR code"
                    width={180}
                    height={180}
                    unoptimized
                    className="block"
                  />
                </div>

                {/* Phone number */}
                <div className="flex items-center gap-3 w-full">
                  <div className="h-px flex-1 bg-brand-brown/15 dark:bg-white/10" />
                  <span className="text-[11px] tracking-[0.25em] font-medium opacity-60">
                    {ZALO_PHONE}
                  </span>
                  <div className="h-px flex-1 bg-brand-brown/15 dark:bg-white/10" />
                </div>

                {/* Open in Zalo button */}
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white text-[11px] tracking-[0.3em] uppercase py-3.5 text-center hover:bg-brand-brown transition-colors duration-300"
                >
                  Mở Zalo
                </a>
              </div>

              {/* Bottom accent */}
              <div className="h-[3px] bg-linear-to-r from-primary/40 via-primary to-primary/40" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
