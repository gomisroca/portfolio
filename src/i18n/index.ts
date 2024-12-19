import welcome from "./translations/welcome";
import nav from "./translations/nav";
import sections from "./translations/sections";
import about from "./translations/about";
import contact from "./translations/contact";
import sidebar from "./translations/sidebar";
import errors from "./translations/errors";

const translations = {
  en: {
    welcome: welcome().en,
    nav: nav().en,
    sections: sections().en,
    about: about().en,
    contact: contact().en,
    sidebar: sidebar().en,
    errors: errors().en,
  },
  es: {
    welcome: welcome().es,
    nav: nav().es,
    sections: sections().es,
    about: about().es,
    contact: contact().es,
    sidebar: sidebar().es,
    errors: errors().es,
  },
  cat: {
    welcome: welcome().cat,
    nav: nav().cat,
    sections: sections().cat,
    about: about().cat,
    contact: contact().cat,
    sidebar: sidebar().cat,
    errors: errors().cat,
  },
  de: {
    welcome: welcome().de,
    nav: nav().de,
    sections: sections().de,
    about: about().de,
    contact: contact().de,
    sidebar: sidebar().de,
    errors: errors().de,
  },
};

export default translations;
