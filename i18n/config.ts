export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export const namespaces = ["common", "home", "product", "story"] as const;

export type Namespace = (typeof namespaces)[number];

