import Image from "next/image";

export default function ShopHero() {
  return (
    <section className="relative h-[62vh] min-h-[420px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          fill
          priority
          alt="The Collection"
          className="object-cover brightness-[0.7] dark:brightness-[0.5] scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1cM0elRRIY9Xq3x0DnlBpOsBvSwRndN7aI0ZiGyOH0iRd6S8rXFHnwVuWcaYuY7QcjIp_Ke01vcWPf7km3EClEFe_v6RpAeRWpepN43Amc33NiSEpPOOHaw2bt5ztx7ZYHfMX_ANn8AmX3iBV2cQT-LMShhNKeFpOV7oxjEX5lxRrBHgurHQQjOKzX3F-SZnLeBv2lcncOJttrS4tOFg2DtvKMcho1zJ3K14CXJgkHn_zlihp-lIIaT7VOSkFqzQVHmSsPt9GqSQ"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <h1 className="font-display text-6xl md:text-8xl text-white font-medium tracking-tight animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
          The Collection
        </h1>
        <p className="text-white/70 mt-4 text-sm tracking-widest max-w-md animate-[heroIn_1s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
          Handcrafted luxury for the modern home — each piece a work of art.
        </p>
      </div>
    </section>
  );
}
