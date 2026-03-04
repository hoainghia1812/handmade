import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n/config";

const intlProxy = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
});

export default intlProxy;

export const config = {
  // Áp dụng cho mọi route app (trừ api, _next, file tĩnh)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

