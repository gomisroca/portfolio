import { ui, defaultLang, showDefaultLang } from "./ui";

export function useTranslatedPath(lang: keyof typeof ui) {
  const basePath = "/portfolio";

  return function translatePath(path: string, l: string = lang) {
    const langPrefix = !showDefaultLang && l === defaultLang ? "" : `/${l}`;
    return `${basePath}${langPrefix}${path}`;
  };
}

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const [namespace, subKey] = key.split(".");

    // Type-safe nested translation lookup
    const languageTranslations = ui[lang];
    const defaultTranslations = ui[defaultLang];

    return (
      // @ts-ignore
      languageTranslations[namespace]?.[subKey] ||
      // @ts-ignore
      defaultTranslations[namespace]?.[subKey] ||
      key
    ); // Fallback to the original key if translation not found
  };
}
