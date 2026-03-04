import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./i18n/config";
import { getMessages } from "./i18n/getMessages";

export default getRequestConfig(async ({ locale }) => {
  const isSupported = (locales as readonly string[]).includes(locale as string);
  const finalLocale = (isSupported ? locale : defaultLocale) as Locale;

  const messages = await getMessages(finalLocale, ["common", "home", "product", "story"]);

  return {
    locale: finalLocale,
    messages,
  };
});

export const i18n = {
  locales,
  defaultLocale,
} as const;

