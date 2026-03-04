"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common");

  const boutiqueLinks = [
    t("footer.boutiqueAll"),
    t("footer.boutiqueLimited"),
    t("footer.boutiqueGift"),
    t("footer.boutiqueCare"),
  ];
  const conciergeLinks = [
    t("footer.conciergeShipping"),
    t("footer.conciergeWholesale"),
    t("footer.conciergeBespoke"),
    t("footer.conciergeContact"),
  ];

  return (
    <footer className="bg-brand-brown text-[#DED5C8] py-20 dark:bg-black dark:text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-display font-bold text-white mb-6">{t("appName")}</div>
            <p className="text-sm leading-relaxed mb-8">{t("footer.tagline")}</p>
            <div className="flex space-x-6">
              <a className="hover:text-primary transition-colors" href="#">Instagram</a>
              <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h5 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8">{t("footer.boutique")}</h5>
            <ul className="space-y-4 text-sm">
              {boutiqueLinks.map((link) => (
                <li key={link}>
                  <a className="hover:text-white transition-colors" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h5 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8">{t("footer.concierge")}</h5>
            <ul className="space-y-4 text-sm">
              {conciergeLinks.map((link) => (
                <li key={link}>
                  <a className="hover:text-white transition-colors" href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8">{t("footer.newsletter")}</h5>
            <p className="text-sm mb-6">{t("footer.newsletterDesc")}</p>
            <form className="relative">
              <input
                className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500"
                placeholder={t("footer.newsletterPlaceholder")}
                type="email"
              />
              <button className="absolute right-0 bottom-2" type="submit">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase opacity-60">
          <p>{t("footer.copyright")}</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a className="hover:text-white" href="#">{t("footer.privacy")}</a>
            <a className="hover:text-white" href="#">{t("footer.terms")}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
