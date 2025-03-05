'use client';
// Directive indiquant que ce code doit être exécuté côté client


import { appWithTranslation } from 'next-i18next';

import { useTranslation } from 'react-i18next';



// Importation de la police "Inter" depuis Google Fonts via Next.js
import { Inter } from 'next/font/google';
// Importation des hooks React useState et useEffect
import { useState, useEffect } from 'react';
// Importation des composants de l'application
import EspaceClient from '@/components/EspaceClient';
import Accueil from '@/components/Accueil';
import Agenda from '@/components/Agenda';
import Envoicontact from '@/components/Envoicontact';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Importation des styles globaux
import './globals.css';

// Chargement de la police Inter avec le sous-ensemble "latin"
const inter = Inter({ subsets: ['latin'] });

// Importation de la configuration i18n depuis le fichier i18next.js
// Cela permet d'utiliser i18next pour la gestion des traductions dans l'application React
import i18n from '@/i18next';

// Level 1: UI Components
// Composant pour le bouton permettant de basculer entre le mode sombre et le mode clair
const DarkModeButton = ({ isDarkMode, onClick }) => (
    <button
        onClick={onClick} // Déclenche l'action pour changer le thème au clic
        className="fixed bottom-4 right-4 p-3 
                  bg-light-primary hover:bg-light-primary/90 
                  dark:bg-accent dark:hover:bg-accent/80 
                  text-white rounded-full shadow-lg z-50"
    >
        {isDarkMode ? "🌞" : "🌙"} {/* Affiche un emoji différent selon le thème */}
    </button>
);

// Level 2: Layout Components
// Composant conteneur pour structurer la page
const PageContainer = ({ children }) => (
    <div className="flex flex-col min-h-screen relative">
        {children} {/* Insertion des composants enfants */}
    </div>
);

// Level 3: Feature Components
// Fournisseur de thème qui applique la classe "dark" selon le mode choisi
const ThemeProvider = ({ isDarkMode, children }) => (
    <html lang="fr" className={isDarkMode ? 'dark' : ''}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        </head>
        <body className={`${inter.className} overflow-x-hidden`}>
            {children} {/* Rendu des composants enfants dans le corps de la page */}
        </body>
    </html>
);

// Level 4: UI Elements
// Composant principal qui affiche le contenu en fonction de la page sélectionnée
const MainContent = ({ page, isDarkMode, setPage }) => (
    <main className={`flex-1 ${
        isDarkMode 
        ? 'bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white' 
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900'
    }`}>
        {/* Affichage conditionnel des composants selon la valeur de "page" */}
        {page === "accueil" ? <Accueil changePage={setPage} /> :
         page === 'agenda' ? <Agenda /> :
         page === 'contact' ? <Contact /> :
         page === 'envoicontact' ? <Envoicontact /> :
         page === 'espace' ? <EspaceClient /> : null}
    </main>
);

// Composant principal (layout racine) de l'application
export default function RootLayout() {
    // Déclaration des états pour gérer la page actuelle et le mode sombre
    const [page, setPage] = useState('accueil'); // État pour la page affichée
    const [isDarkMode, setIsDarkMode] = useState(false); // État pour le mode sombre

    // Hook useEffect pour récupérer le thème sauvegardé dans le localStorage au montage du composant
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme'); // Récupération du thème sauvegardé
        if (savedTheme === 'dark') {
            setIsDarkMode(true); // Activation du mode sombre si le thème est "dark"
            document.documentElement.classList.add('dark'); // Ajout de la classe "dark" à l'élément HTML
        }
    }, []);

    // Fonction pour basculer entre le mode sombre et le mode clair
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode; // Inversion de l'état du mode sombre
        setIsDarkMode(newDarkMode); // Mise à jour de l'état local
        document.documentElement.classList.toggle('dark'); // Basculement de la classe "dark" sur l'élément HTML
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light'); // Sauvegarde du thème dans le localStorage
    };

    // Rendu du layout principal avec tous les composants enfants et le bouton de changement de thème
    return (
        <ThemeProvider isDarkMode={isDarkMode}>
            <PageContainer>
                <Header changePage={setPage} /> {/* Composant d'en-tête */}
                <MainContent page={page} isDarkMode={isDarkMode} setPage={setPage} /> {/* Contenu principal */}
                <Footer /> {/* Composant de pied de page */}
                <DarkModeButton isDarkMode={isDarkMode} onClick={toggleDarkMode} /> {/* Bouton pour changer le thème */}
            </PageContainer>
        </ThemeProvider>
    );
}
