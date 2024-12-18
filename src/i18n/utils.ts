import translations from "./index";

export const languages = {
  en: "English",
  es: "Español",
  cat: "Català",
  de: "Deutsch",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export function useTranslatedPath(lang: keyof typeof translations) {
  const basePath = "/portfolio";

  return function translatePath(path: string, l: string = lang) {
    const langPrefix = !showDefaultLang && l === defaultLang ? "" : `/${l}`;
    return `${basePath}${langPrefix}${path}`;
  };
}

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split("/");
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: string) {
    const [namespace, subKey] = key.split(".");

    // Type-safe nested translation lookup
    const languageTranslations = translations[lang];
    const defaultTranslations = translations[defaultLang];

    return (
      // @ts-ignore
      languageTranslations[namespace]?.[subKey] ||
      // @ts-ignore
      defaultTranslations[namespace]?.[subKey] ||
      key
    ); // Fallback to the original key if translation not found
  };
}
