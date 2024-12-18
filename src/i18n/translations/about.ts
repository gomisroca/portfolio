const aboutTranslations = {
  en: {
    introduction: `
      My name is Adrià and I'm a full-stack web developer based in Barcelona, Spain. 
      I'm passionate about building user-friendly and performant web applications.
      I have experience working with a big assortment of technologies, focusing on some of the most battle-tested frameworks and libraries in the industry.`,
    personal: `
      In my free time, I enjoy sports, mainly running and hiking, and winding down via meditation or yoga. 
      I also have a Border Collie named Son (from the Catalan word for 'sleep'), pictured below, who makes sure I'm always active and with whom I spend most of my spare time.`,
    transition: `
      Creative endeavours have always been a part of my life.
      I studied music and worked as a bassist, I write stories in my spare time, and I'm a less-than-perfect woodworker, having created some tables and chairs.
      However, in the programming world I found a perfect balance between my creative side and my more technical side.
      I love to create and build, and I love finding creative solutions to problems.`,
    study: `
      I'm a self-taught developer who has built himself a strong foundation in computer science and programming.
      I have a deep understanding of the fundamentals of web development, and I'm constantly learning and improving my skills.
      Below, you will find some of the courses I've taken, as well as the certifications where available.`,
    "Python Programming":
      "Aimed at beginners with no prior coding experience, the course provides a thorough introduction to Python programming through interactive exercises, hands-on coding challenges, and a structured curriculum that progressively builds programming skills.",
    "Full Stack Open":
      "Full Stack Open is a free MOOC that teaches you how to build web applications using the React framework. It covers React, TypeScript, APIs, containers, databases, and other related technologies.",
  },
  es: {
    title: `<h1 class="text-4xl font-bold">Hola, soy Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Desarrollador web full-stack</h3>`,
    body: `<p>Especializado en el ecosistema de React, enfocado en desarrollar aplicaciones web que sean <span class="font-semibold">potentes</span>, <span class="font-semibold">fáciles de usar</span> y <span class="font-semibold">altamente eficientes</span>.</p>`,
  },
  cat: {
    title: `<h1 class="text-4xl font-bold">Hola, soc l'Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Desenvolupador web full-stack</h3>`,
    body: `<p>Especialitzat en l'ecosistema de React, centrat en desenvolpar aplicacions web que siguin <span class="font-semibold">potents</span>, <span class="font-semibold">fàcils d'utilitzar</span> i <span class="font-semibold">altament eficients</span>.</p>`,
  },
  de: {
    title: `<h1 class="text-4xl font-bold">Hallo, ich bin Adrià 👋</h1>`,
    subtitle: `<h3 class="text-2xl font-semibold">Full-Stack-Webentwickler</h3>`,
    body: `<p>Spezialisiert auf das React-Ökosystem, konzentriert auf die Entwicklung von Webanwendungen, die <span class="font-semibold">leistungsstark</span>, <span class="font-semibold">benutzerfreundlich</span> und <span class="font-semibold">hocheffizient</span> sind.</p>`,
  },
};

export default function about() {
  return aboutTranslations;
}
