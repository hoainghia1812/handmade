import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 scale-105">
          <Image
            fill
            alt="Luxury Wool Texture"
            className="object-cover brightness-[0.85] dark:brightness-[0.6]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIFebga5kQz5t3adBI1sSPmuTDrOHAenWzC15lfdgvJFs7O8ZUp3guexQ632Fk3qP7pS2UaebNoi83y5CJZ4qofy6A6HhV-qr67tyLNym0gPvhuo2PPc-B31X5W7izgAs36toYcYaTcZhaOAmRNVSkzndtJj75cLTSFuyy2GFzIPGee3jWbLPImAua02Mhh3wdvCCKiZn93MIQg_l_vd279o8_477w1PlGOmb-IxNCkB88014BVgiz-tdlBcciYxBs7HuZaYvoCOE"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="font-display italic text-2xl md:text-3xl mb-4 text-primary">Artisanship in every stitch</h2>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-tight mb-8">The Luxury of Giving</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a className="bg-primary hover:bg-opacity-90 text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300" href="#shop">Shop Collection</a>
            <a className="border border-white/40 hover:border-white text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 bg-white/5 backdrop-blur-sm" href="#story">Our Process</a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white opacity-50">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden aspect-3/4 cursor-pointer">
              <Image
                fill
                alt="Handmade Blankets"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9f1M64Xn7ehv8vs-TAgqDSR854VE8LHranmPKuNVm6ESk_mKMjaTb9miR_DPQGVeOhhsQ9rHyXIZUUfmukmNAZuMEwTvloUZqVPp3X0D_PIKS5exY7qJhdZiwu_a07r9ACRCrKnLOAhvAXzGurkvrE2mjy3LMBHSxqY0ZLV-yiv6l2zU9P6TkaKRJJM5hPbe3XIa8VfJUkpbb52XHbGLw3IqHLnpI3h_exNYbzJ4r50MheTYP7fwtH0hN4KkVhZBoXb5iNwBMy0"
              />
              <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-brand-brown/40 transition-colors"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-display text-3xl mb-2">Heritage Throws</h3>
                <p className="text-xs tracking-[0.2em] uppercase opacity-90 border-b border-white/50 pb-1 inline-block">Explore Throws</p>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-3/4 cursor-pointer">
              <Image
                fill
                alt="Luxury Cushions"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaqKjN_qh9_nvQStIndooZykKBPFIim30BT6jUiHDGxWPI40md4zPo3vwNFFWaEejLoVNETFblDSCgkjEgZuzQrEFNx4mrLWlHzpM8ATY3sff2LxnyjFYblIaQM3phvQXVH9V_nMyl2XslpRB8r2s1ne9ONmpYf1vbwPAejPs6ozB8KjZ3mlheOM1QhLJSeUpI4Tc0uGKfXSaiC3_7zbwN8Pnv1MaIR6l2KMIQR_IqY7BKJtTk-Qb6jZ05PgJPf0Jp5rZ_dl3_sOQ"
              />
              <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-brand-brown/40 transition-colors"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-display text-3xl mb-2">Artisan Cushions</h3>
                <p className="text-xs tracking-[0.2em] uppercase opacity-90 border-b border-white/50 pb-1 inline-block">View Accents</p>
              </div>
            </div>
            <div className="group relative overflow-hidden aspect-3/4 cursor-pointer">
              <Image
                fill
                alt="Sustainable Living"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN75cqxoSnhOSjO4x7bkbnHaMOeVwOsVI2rDDFN6Xo8P4AWT7gpLr5CgwenyBEPKGEMnaCXjItzunkUdrbotuuQnZKj8-lUEIJu7T5PMfNAiEP1CCYb-R0wr4F8kDzvkG3LPnHao_CapK5mSzEm7bkZuRpUWSM5KZ5Ug0VKFGQLT8yMkeZ0FkHYJFzjzrOyY5xMt7QV2tDH97M9yr_LjvfHSUZ71VAskXnyfav2RTrSaybayD66pJ-2GOtFdQl2pyp5wBv2ott-oM"
              />
              <div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-brand-brown/40 transition-colors"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="font-display text-3xl mb-2">Living Essentials</h3>
                <p className="text-xs tracking-[0.2em] uppercase opacity-90 border-b border-white/50 pb-1 inline-block">Browse Essentials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 px-6 lg:px-12" id="shop">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
            <div>
              <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-2 block">Curation</span>
              <h2 className="font-display text-4xl md:text-5xl">New Arrivals</h2>
            </div>
            <a className="text-xs tracking-widest uppercase border-b border-brand-brown dark:border-background-light pb-1 hover:text-primary transition-colors mt-4 md:mt-0" href="#">View All Products</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Product 1 */}
            <div className="group">
              <div className="relative aspect-4/5 overflow-hidden mb-6 bg-stone-200 dark:bg-stone-800">
                <Image
                  fill
                  alt="Merino Cloud Throw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fDkx8a6xYLVZrRiMOId4mF9qOq_A6fb_gZLAkgYxos3woUfgqxc9_-caD7rEhCOf7dJV9txBqLzadiIbPZzwGRYocTtE856u0HkFybIMq4b3ClwHv98Dz3rh4JA3RTqUIywoAAHKRfxW4Noai-_ehXQT40E-gh03d3Ri1JAZNh3Fbjy97pWBa2cX9mVeT_t7QFj3FSZVmN2olDS40wEAQz6rHopzUelWVU80kBD_4fgXBaMQgemF9Iau0of9qyoE4GHX1IYvrwo"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 dark:bg-black/80 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                  </button>
                </div>
              </div>
              <h4 className="font-display text-xl mb-1">Merino Cloud Throw</h4>
              <p className="text-primary font-medium">$420.00</p>
              <p className="text-[10px] tracking-widest uppercase opacity-60 mt-2">100% Organic Merino Wool</p>
            </div>
            {/* Product 2 */}
            <div className="group">
              <div className="relative aspect-4/5 overflow-hidden mb-6 bg-stone-200 dark:bg-stone-800">
                <Image
                  fill
                  alt="Cable Knit Cushion"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrsTbIhr8VvkPxrnjcxquP0h6K_2WPvrrqwJZmQkL_yNNjGHNhZ5SvlqKOx7NRPo1enduCnxdWgiRkxfJlpe0R1XFA_YFSm3ffj2mBBON99lgU2vInM9OqxMlf2ctat-_IZzvmvYUOdcTVZErwN11lpQnHJ54BKicGYZrE2DNUkbv9wUma2u_gi4_O4yRhdELd7btgjFvVIo5fFoOKjAvJYmDSJ3hWsQMhVE7bQ91oUXzsdeDk22kHwu9Z3G32N-xLciRk4yN21BM"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 dark:bg-black/80 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                  </button>
                </div>
              </div>
              <h4 className="font-display text-xl mb-1">Cable Knit Cushion</h4>
              <p className="text-primary font-medium">$185.00</p>
              <p className="text-[10px] tracking-widest uppercase opacity-60 mt-2">Handmade Cotton Blend</p>
            </div>
            {/* Product 3 */}
            <div className="group">
              <div className="relative aspect-4/5 overflow-hidden mb-6 bg-stone-200 dark:bg-stone-800">
                <Image
                  fill
                  alt="Oatmeal Texture Rug"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmgYnlGiANqFRA7kNvb3eNWBz4zSd9VSmssbt1FbOhRAMpgoMfNFY0rds3pFhKrKYcMYuZKCDTbDZupKaaLbJ839TpJ88T2lkuBnQCQnItiHrTt_XT3B2_yXyzS0OvrcXJGtJ2Jvlhx6NKbO9Gb7enJvlqB6Man-eVWJHZPxgdPNYP48_GY1J5eK0QlJLOdGs458rTarp2XNaDFgpf98BeG2bwQLXNbQ__DYdLZxxyhwEjh36AWMUAxa_BvQFtagl_AK7GcPbcytw"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 dark:bg-black/80 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                  </button>
                </div>
              </div>
              <h4 className="font-display text-xl mb-1">Oatmeal Texture Rug</h4>
              <p className="text-primary font-medium">$890.00</p>
              <p className="text-[10px] tracking-widest uppercase opacity-60 mt-2">Woven Alpaca Wool</p>
            </div>
            {/* Product 4 */}
            <div className="group">
              <div className="relative aspect-4/5 overflow-hidden mb-6 bg-stone-200 dark:bg-stone-800">
                <Image
                  fill
                  alt="Silk & Wool Wrap"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXutQduBS1tDGHWgkeI-oNYfPrZbF1EcgCHRUVf7uybtvdACqtdcr0_rs-toohEZoYDKjr4eYKNaeVxmIYtIG4YvdDdK9YCiISt_GuM4qSqPiC-6fACFe4sAYTVAHbZfIimdzAx6g652YyoIuj9ExfcS7GDSVuuyC6EcdmpjOgGJ4O71E10WFOt7Ly9FJWiqWVcO1L09CK6xVbqeUjPGVuejbiC162dZuJbHUsdT5gA1hb-QKrSIsJeQXg1q1k_NqS0W3PHcV80SE"
                />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 dark:bg-black/80 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                  </button>
                </div>
              </div>
              <h4 className="font-display text-xl mb-1">Silk &amp; Wool Wrap</h4>
              <p className="text-primary font-medium">$310.00</p>
              <p className="text-[10px] tracking-widest uppercase opacity-60 mt-2">Limited Edition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#EBE4D5] dark:bg-neutral-900" id="story">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square">
                <Image
                  fill
                  alt="Artisan Hands"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJuPF37gE56fSewtifGK_tM7K5o-bpW354TJuzcbvCFdmiBIOZOE00Aqm26uOuxB_A9twsMVl_sgtQXBjB9uzwwKx9UBmzIbtPWm6Np1aDakw8sn5tdTFXedkDV61QToyFY5cLv6_TWSGXHBJeNg1gkyAlHltaGtYhjuTsvz7YUTtIuOFVcPbnOU_k5rc5KkA1T4jMcSGIu6MPAcPzO0tgjzkYrAI5knKGJhFEhC296icFQmHGDnLsSGU5gejYs0U3bovKmu3Btw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-80 border-4 border-primary/20 p-4">
                <div className="relative w-full h-full">
                  <Image
                    fill
                    alt="Wool Detail"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5P5jfL6RURg_w2_8tlxOjWh9aticf_LV17dMSblStiJkWbohjoEEACUR93dhAHngGT5YKnnRmiNsV6r9HRN2sO21tU7c-_MCddiLVnFm0oXQ8OgX3TVbGajCSR3aR1reX1UcULVdlOyLGOcfyXUpR5AgIYSfwqjhNYVEay62Njg_xWkR-3gwtcVFVscaKvDz6KLdA4oAy1-jZWD6L-imGnBmDMA1aLG8lUEJ7f8wJtXFcj6ztEQesDX6xP40PxSYRlZkKBKXy0dc"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-primary tracking-[0.4em] uppercase text-xs font-bold">The Maker&apos;s Mark</span>
              <h2 className="font-display text-5xl md:text-6xl leading-tight italic">Rooted in Heritage, Crafted for Comfort.</h2>
              <p className="text-lg leading-relaxed opacity-80">
                At Mush &amp; Co., we believe that luxury is felt, not just seen. Every piece in our collection is meticulously hand-crocheted or woven by master artisans using time-honored techniques passed through generations.
              </p>
              <p className="text-lg leading-relaxed opacity-80">
                We source only the finest, sustainable natural fibers—from ethically harvested Merino wool to rare Grade-A cashmere—ensuring each creation is a legacy piece for your home.
              </p>
              <div className="pt-6">
                <button className="flex items-center space-x-4 group">
                  <span className="w-12 h-px bg-brand-brown dark:bg-background-light group-hover:w-20 group-hover:bg-primary transition-all duration-300"></span>
                  <span className="text-xs tracking-[0.3em] uppercase font-bold">Discover Our Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 lg:px-12 text-center bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-primary text-5xl mb-8">format_quote</span>
          <p className="font-display text-3xl md:text-5xl italic leading-snug mb-12">
            &ldquo;There is a profound soul in things made by hand. Mush &amp; Co. captures the essence of warmth and luxury in a way that feels personal.&rdquo;
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-xs tracking-[0.3em] uppercase font-bold">Elena Vance, Interior Designer</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
        </div>
      </section>

      {/* Editorial / Lookbook */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <div className="md:col-span-8 relative overflow-hidden group">
              <Image
                fill
                alt="Interior Design"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1cM0elRRIY9Xq3x0DnlBpOsBvSwRndN7aI0ZiGyOH0iRd6S8rXFHnwVuWcaYuY7QcjIp_Ke01vcWPf7km3EClEFe_v6RpAeRWpepN43Amc33NiSEpPOOHaw2bt5ztx7ZYHfMX_ANn8AmX3iBV2cQT-LMShhNKeFpOV7oxjEX5lxRrBHgurHQQjOKzX3F-SZnLeBv2lcncOJttrS4tOFg2DtvKMcho1zJ3K14CXJgkHn_zlihp-lIIaT7VOSkFqzQVHmSsPt9GqSQ"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-12 flex flex-col justify-end text-white">
                <h3 className="font-display text-4xl mb-4">Curated Living Spaces</h3>
                <p className="max-w-md mb-8 opacity-80">A selection of our favorite pieces styled in modern, minimalist environments.</p>
                <a className="text-xs tracking-[0.2em] uppercase underline underline-offset-8" href="#">Shop Lookbook</a>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="relative overflow-hidden group">
                <Image
                  fill
                  alt="Detail 1"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUqBJh2dv8H2MeJxXuFow45okAbswrol6Q18bUEmdhWcTXLr5nrndXL8jl8sc9aDWTI_83itlul8p80-yDtjXKti3AgO95D2Kv5rCgpYP2mxSrPbE4De5F1o83DesDIGfwdRj34vcdJ3THJf9WbKRmROFoN6yS1CsMHTfo_I1dkpsu8GxN5qu0-LW4SG7bifXsDkdDzDJ9rPd3QQBbLmAK8agVYq6DpLvWjwrWBGy5qUgDxeb5IOjIqQYLFYiyso5fKAaQ9Gk-puA"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="relative overflow-hidden group">
                <Image
                  fill
                  alt="Detail 2"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKl2gqJxZcC51zFxd4XwvCdmbVroEMa0h267Z5Zf5xq00sRgN5rPBDq5ZXYLD1nm_Dbz6iHRQokMijSrP3RLikKbc0TQIO4aVucKqUXkfCUOBCNefiwjuYEZh8aK_Pr5cssMFFYGsQUx5pySvF8CP1mkcAHwNmaB1JGSa7jHL2BCicti0BHtJUILJ0FEpY0KlPWIJJKRcrbXeUP0DwqyefUybKhHZjL3polR8I1o6XnbxWwUneJIabwj5Z1tP8t4ybwIV5LsF6rkU"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-brown text-[#DED5C8] py-20 dark:bg-black dark:text-neutral-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
              <div className="text-2xl font-display font-bold text-white mb-6">MUSH &amp; CO.</div>
              <p className="text-sm leading-relaxed mb-8">Elevating the everyday through artisanal craftsmanship and the world&apos;s finest natural fibers.</p>
              <div className="flex space-x-6">
                <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
              </div>
            </div>
            <div>
              <h5 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8">Boutique</h5>
              <ul className="space-y-4 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">All Collections</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Limited Editions</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Care Guide</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8">Concierge</h5>
              <ul className="space-y-4 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Wholesale Inquiry</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Bespoke Orders</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8">Newsletter</h5>
              <p className="text-sm mb-6">Join our circle for exclusive early access and artisan stories.</p>
              <form className="relative">
                <input
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="absolute right-0 bottom-2" type="submit">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase opacity-60">
            <p>© 2024 Mush &amp; Co. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a className="hover:text-white" href="#">Privacy Policy</a>
              <a className="hover:text-white" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">chat_bubble</span>
        </button>
      </div>
    </>
  );
}
