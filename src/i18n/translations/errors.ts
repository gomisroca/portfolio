const errorTranslations = {
  en: {
    "404": "Page not found",
    "500": "Internal server error",
    projects: "No projects found",
    blog: "No retrospective entries found",
  },
  es: {
    "404": "Página no encontrada",
    "500": "Error interno del servidor",
    projects: "No se encontraron proyectos",
    blog: "No se encontraron entradas de retrospectiva",
  },
  cat: {
    "404": "Pàgina no trobada",
    "500": "Error intern del servidor",
    projects: "No s'han trobat projectes",
    blog: "No s'han trobat entrades de retrospectiva",
  },
  de: {
    "404": "Seite nicht gefunden",
    "500": "Interner Serverfehler",
    projects: "Keine Projekte gefunden",
    blog: "Keine Retrospektive-Einträge gefunden",
  },
};

export default function errors() {
  return errorTranslations;
}
