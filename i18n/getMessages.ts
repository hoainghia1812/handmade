import type { Locale, Namespace } from "./config";

export type Messages = Record<string, unknown>;

async function importNamespace(
  locale: Locale,
  namespace: Namespace
): Promise<Messages> {
  try {
    switch (locale) {
      case "en": {
        switch (namespace) {
          case "common":
            return (await import("../messages/en/common.json")).default;
          case "home":
            return (await import("../messages/en/home.json")).default;
          case "product":
            return (await import("../messages/en/product.json")).default;
          case "story":
            return (await import("../messages/en/story.json")).default;
        }
        break;
      }
      case "vi": {
        switch (namespace) {
          case "common":
            return (await import("../messages/vi/common.json")).default;
          case "home":
            return (await import("../messages/vi/home.json")).default;
          case "product":
            return (await import("../messages/vi/product.json")).default;
          case "story":
            return (await import("../messages/vi/story.json")).default;
        }
        break;
      }
    }
  } catch (error) {
    console.error(
      `[i18n] Missing or invalid messages for locale="${locale}", namespace="${namespace}"`,
      error
    );
  }

  return {};
}

export async function getMessages(
  locale: Locale,
  namespaces: Namespace[]
): Promise<Messages> {
  const entries = await Promise.all(
    namespaces.map(async (ns) => {
      const messages = await importNamespace(locale, ns);
      return [ns, messages] as const;
    })
  );

  return entries.reduce<Messages>((all, [ns, messages]) => {
    (all as Record<string, unknown>)[ns] = messages;
    return all;
  }, {});
}

