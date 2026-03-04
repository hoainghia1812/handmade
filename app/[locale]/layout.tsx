import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import Header from "../components/Header";
import { getMessages } from "@/i18n/getMessages";
import type { Locale } from "@/i18n/config";
import { defaultLocale, locales } from "@/i18n/config";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const isSupported = locales.includes(locale);
  const finalLocale = isSupported ? locale : defaultLocale;

  const messages = await getMessages(finalLocale, ["common", "home", "product", "story"]);

  return (
    <NextIntlClientProvider locale={finalLocale} messages={messages}>
      <Header />
      {children}
    </NextIntlClientProvider>
  );
}

