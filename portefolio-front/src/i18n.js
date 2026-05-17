import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Example translations
const resources = {
    en: {
        translation: {
            Home: "Home",
            About: "About",
            Projects: "Projects",
            Skills: "Skills",
            Experience: "Experience",
            Education: "Education",
            Contact: "Contact",
            Language: "Language",
        },
    },
   /* pt: {
        translation: {
            Home: "Início",
            About: "Sobre",
            Projects: "Projetos",
            Skills: "Competências",
            Experience: "Experiência",
            Contact: "Contacto",
            Education: "Educação",
            Language: "Linguagem",
        },
    },*/
};

i18n
    .use(LanguageDetector) // detects browser language
    .use(initReactI18next) // connects with React
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already escapes
        },
    });

export default i18n;
