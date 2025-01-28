const contactTranslations = {
  en: {
    email: `You can contact me via email at <br/><a href="mailto:gomisroca@gmail.com" class="text-2xl font-semibold transition-colors duration-200 hover:text-primary-500">gomisroca@gmail.com</a><p class="mt-2">Or simply filling out the following form:</p>`,
    others: `You will also find me in the following platforms:`,
    nameField: `Name`,
    emailField: `Email`,
    messageField: `Message`,
    sendButton: `Send Message`,
    sending: `Sending...`,
    success: `Message sent! Thank you for contacting me, I will get back to you as soon as possible.`,
    error: `Something went wrong, please try again.`,
  },
  es: {
    email: `Puedes contactar conmigo por correo electrónico en <br/><a href="mailto:gomisroca@gmail.com" class="text-2xl font-semibold transition-colors duration-200 hover:text-primary-500">gomisroca@gmail.com</a><p class="mt-2">O simplemente completando el siguiente formulario:</p>`,
    others: `También me encontrarás en las siguientes plataformas:`,
    nameField: `Nombre`,
    emailField: `Correo Electrónico`,
    messageField: `Mensaje`,
    sendButton: `Enviar Mensaje`,
    sending: `Enviando...`,
    success: `¡Mensaje enviado! Gracias por contactar conmigo, contactaré con vosotros lo antes posible.`,
    error: `Algo ha salido mal, por favor inténtalo de nuevo.`,
  },
  cat: {
    email: `Pots contactar amb mi per correu electrònic a <br/><a href="mailto:gomisroca@gmail.com" class="text-2xl font-semibold transition-colors duration-200 hover:text-primary-500">gomisroca@gmail.com</a><p class="mt-2">O simplement omplint el següent formulari:</p>`,
    others: `També em trobaràs a les següents plataformes:`,
    nameField: `Nom`,
    emailField: `Correu Electrònic`,
    messageField: `Missatge`,
    sendButton: `Enviar Missatge`,
    sending: `Enviant...`,
    success: `Missatge enviat! Gràcies per contactar-me, contactare amb vosaltres tant aviat com sigui possible.`,
    error: `Alguna cosa ha sortit malament, si us plau, torna-ho a provar.`,
  },
  de: {
    email: `Sie können mich per E-Mail kontaktieren unter <br/><a href="mailto:gomisroca@gmail.com" class="text-2xl font-semibold transition-colors duration-200 hover:text-primary-500">gomisroca@gmail.com</a><p class="mt-2">Oder einfach das folgende Formular ausfüllen:</p>`,
    others: `Sie finden mich auch auf folgenden Plattformen:`,
    nameField: `Name`,
    emailField: `E-Mail`,
    messageField: `Nachricht`,
    sendButton: `Nachricht senden`,
    sending: `Senden...`,
    success: `Nachricht gesendet! Vielen Dank für Ihre Kontaktaufnahme, ich werde mich so schnell wie möglich bei Ihnen melden.`,
    error: `Etwas ist schief gelaufen, bitte versuchen Sie es noch einmal.`,
  },
};

export default function contact() {
  return contactTranslations;
}
