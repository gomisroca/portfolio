export const languages = {
  en: "English",
  es: "Español",
  cat: "Català",
  de: "Deutsch",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    landing: {
      welcome: [
        `<h1 class="text-4xl font-bold">Hi, I'm Adrià 👋</h1>`,
        `<h3 class="text-2xl font-semibold">Full-stack web developer</h3>`,
        `<p>Specialized in the React ecosystem, with a focus on building web applications that are <span class="font-semibold">powerful</span>, <span class="font-semibold">user-friendly</span>, and <span class="font-semibold">highly performant</span>.</p>`,
      ],
    },
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
  },
  es: {
    landing: {
      welcome: [
        "Hola, soy Adrià 👋.",
        "Soy un desarrollador web full-stack.",
        "Aplicaciones web limpias, potentes y eficientes son mi pasión.",
      ],
    },
    nav: {
      home: "Inicio",
      about: "Sobre Mi",
      contact: "Contacto",
    },
  },
  cat: {
    landing: {
      welcome: [
        "Hola, soy Adrià 👋.",
        "Soy un desarrollador web full-stack.",
        "Aplicaciones web limpias, potentes y eficientes son mi pasión.",
      ],
    },
    nav: {
      home: "Inici",
      about: "Sobre Mi",
      contact: "Contacte",
    },
  },
  de: {
    landing: {
      welcome: [
        "Hola, soy Adrià 👋.",
        "Soy un desarrollador web full-stack.",
        "Aplicaciones web limpias, potentes y eficientes son mi pasión.",
      ],
    },
    nav: {
      home: "Anfang",
      about: "Über Mich",
      contact: "Kontakt",
    },
  },
} as const;
