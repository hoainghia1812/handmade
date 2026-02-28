"use client";

import Image from "next/image";
import { useInView } from "../hooks/useInView";

export default function Lookbook() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 h-[360px] sm:h-[480px] md:h-[600px] lg:h-[800px]">

          {/* Main feature image */}
          <div className={`reveal from-left md:col-span-8 relative overflow-hidden group ${inView ? "in-view" : ""}`}>
            <Image
              fill
              alt="Interior Design"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1cM0elRRIY9Xq3x0DnlBpOsBvSwRndN7aI0ZiGyOH0iRd6S8rXFHnwVuWcaYuY7QcjIp_Ke01vcWPf7km3EClEFe_v6RpAeRWpepN43Amc33NiSEpPOOHaw2bt5ztx7ZYHfMX_ANn8AmX3iBV2cQT-LMShhNKeFpOV7oxjEX5lxRrBHgurHQQjOKzX3F-SZnLeBv2lcncOJttrS4tOFg2DtvKMcho1zJ3K14CXJgkHn_zlihp-lIIaT7VOSkFqzQVHmSsPt9GqSQ"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-4 sm:inset-6 md:inset-12 flex flex-col justify-end text-white">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4">Curated Living Spaces</h3>
              <p className="max-w-xs sm:max-w-md mb-4 md:mb-8 opacity-80 text-xs sm:text-sm md:text-base hidden sm:block">
                A selection of our favorite pieces styled in modern, minimalist environments.
              </p>
              <a className="text-[10px] sm:text-xs tracking-[0.2em] uppercase underline underline-offset-8" href="#">
                Shop Lookbook
              </a>
            </div>
          </div>

          {/* Side detail images */}
          <div className="md:col-span-4 grid grid-rows-2 gap-3 sm:gap-4 md:gap-6">
            <div className={`reveal from-right reveal-delay-200 relative overflow-hidden group ${inView ? "in-view" : ""}`}>
              <Image
                fill
                alt="Detail 1"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUqBJh2dv8H2MeJxXuFow45okAbswrol6Q18bUEmdhWcTXLr5nrndXL8jl8sc9aDWTI_83itlul8p80-yDtjXKti3AgO95D2Kv5rCgpYP2mxSrPbE4De5F1o83DesDIGfwdRj34vcdJ3THJf9WbKRmROFoN6yS1CsMHTfo_I1dkpsu8GxN5qu0-LW4SG7bifXsDkdDzDJ9rPd3QQBbLmAK8agVYq6DpLvWjwrWBGy5qUgDxeb5IOjIqQYLFYiyso5fKAaQ9Gk-puA"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className={`reveal from-right reveal-delay-400 relative overflow-hidden group ${inView ? "in-view" : ""}`}>
              <Image
                fill
                alt="Detail 2"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKl2gqJxZcC51zFxd4XwvCdmbVroEMa0h267Z5Zf5xq00sRgN5rPBDq5ZXYLD1nm_Dbz6iHRQokMijSrP3RLikKbc0TQIO4aVucKqUXkfCUOBCNefiwjuYEZh8aK_Pr5cssMFFYGsQUx5pySvF8CP1mkcAHwNmaB1JGSa7jHL2BCicti0BHtJUILJ0FEpY0KlPWIJJKRcrbXeUP0DwqyefUybKhHZjL3polR8I1o6XnbxWwUneJIabwj5Z1tP8t4ybwIV5LsF6rkU"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
