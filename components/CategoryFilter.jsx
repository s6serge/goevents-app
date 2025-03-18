"use client"; // Ce composant s'exécute uniquement côté client

import { appWithTranslation } from "next-i18next";
import { useTranslation } from "react-i18next";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import EspaceClient from "@/components/EspaceClient";
import Accueil from "@/components/Accueil";
import Agenda from "@/components/Agenda";
import Envoicontact from "@/components/Envoicontact";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Chargement de la police Inter avec le sous-ensemble "latin"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
    const { t, i18n } = useTranslation(); // Initialisation de i18next pour la gestion des traductions
    const [page, setPage] = useState("accueil"); // Stocke la page actuellement affichée
    const [isDarkMode, setIsDarkMode] = useState(false); // Stocke l'état du mode sombre
    const [isMounted, setIsMounted] = useState(false); // Empêche l'hydratation incorrecte côté client

    // Vérifie que le composant est bien monté avant d'afficher l'interface utilisateur
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Vérifie si un thème a été précédemment sauvegardé dans le localStorage et l'applique
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme"); 
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // Fonction pour basculer entre le mode sombre et le mode clair
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode; // Inverse l'état du mode sombre
        setIsDarkMode(newDarkMode);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newDarkMode ? "dark" : "light"); // Sauvegarde la préférence de thème
    };

    // Empêche le rendu du HTML tant que le composant n'est pas monté (évite les erreurs de Next.js)
    if (!isMounted) return null;

    return (
        <html lang={i18n.language} className={isDarkMode ? "dark" : ""}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            </head>
            <body className={`${inter.className} overflow-x-hidden`}>
                {/* En-tête de la page */}
                <Header changePage={setPage} />

                {/* Contenu principal qui change selon la page sélectionnée */}
                <main key={page} className={`flex-1 ${isDarkMode ? "bg-dark text-white" : "bg-light text-black"}`}>
                    {page === "accueil" ? <Accueil changePage={setPage} /> :
                     page === "agenda" ? <Agenda /> :
                     page === "contact" ? <Contact /> :
                     page === "envoicontact" ? <Envoicontact /> :
                     page === "espace" ? <EspaceClient /> : null}
                </main>

                {/* Pied de page */}
                <Footer />

                {/* Bouton pour activer/désactiver le mode sombre */}
                <button 
                    onClick={toggleDarkMode} 
                    className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg"
                >
                    {isDarkMode ? "🌞" : "🌙"}
                </button>
            </body>
        </html>
    );
}
