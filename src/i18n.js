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
            Contact: "Contact",
            welcome: "Welcome! I'm a software developer specializing in React, Three.js, and backend services.",
            aboutMe: "I build performant, accessible web apps with a focus on developer experience and product impact.",
            contactMe: "Reach me at ruipedrotelesribeiro@gmail.com",
            Language: "Language",
        },
    },
    pt: {
        translation: {
            Home: "Início",
            About: "Sobre",
            Projects: "Projetos",
            Skills: "Competências",
            Experience: "Experiência",
            Contact: "Contacto",
            welcome: "Bem-vindo! Sou um desenvolvedor especializado em React, Three.js e serviços backend.",
            aboutMe: "Crio aplicações web rápidas e acessíveis com foco na experiência do programador e impacto do produto.",
            contactMe: "Contacte-me em ruipedrotelesribeiro@gmail.com",
            Language: "Linguagem",
        },
    },
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
