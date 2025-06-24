const welcomeTranslations = {
  en: {
    title: `<h1 class="text-4xl font-bold">Hi, I'm Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Full-stack web developer</h3>`,
    body: `<p>Focused on building web applications that are <span class="font-semibold">powerful</span>, <span class="font-semibold">user-friendly</span>, and <span class="font-semibold">highly performant</span>.`,
  },
  es: {
    title: `<h1 class="text-4xl font-bold">Hola, soy Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Desarrollador web full-stack</h3>`,
    body: `<p>Enfocado en desarrollar aplicaciones web que sean <span class="font-semibold">potentes</span>, <span class="font-semibold">fáciles de usar</span> y <span class="font-semibold">altamente eficientes</span>.</p>`,
  },
  cat: {
    title: `<h1 class="text-4xl font-bold">Hola, soc l'Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Desenvolupador web full-stack</h3>`,
    body: `<p>Enfocat a desenvolupar aplicacions web que siguin <span class="font-semibold">potents</span>, <span class="font-semibold">fàcils d'utilitzar</span> i <span class="font-semibold">altament eficients</span>.</p>`,
  },
  de: {
    title: `<h1 class="text-4xl font-bold">Hallo, ich bin Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Full-Stack-Webentwickler</h3>`,
    body: `<p>Konzentriert auf die Entwicklung von Webanwendungen, die <span class="font-semibold">leistungsstark</span>, <span class="font-semibold">benutzerfreundlich</span> und <span class="font-semibold">hocheffizient</span> sind.</p>`,
  },
};

export default function welcome() {
  return welcomeTranslations;
}
