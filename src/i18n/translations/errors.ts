const errorTranslations = {
  en: {
    "404": "Page not found",
    "500": "Internal server error",
  },
  es: {
    "404": "Página no encontrada",
    "500": "Error interno del servidor",
  },
  cat: {
    "404": "Pàgina no trobada",
    "500": "Error intern del servidor",
  },
  de: {
    "404": "Seite nicht gefunden",
    "500": "Interner Serverfehler",
  },
};

export default function errors() {
  return errorTranslations;
}
