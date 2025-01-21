"use client";

import Image from 'next/image'; 
import logo from '@/public/photo/salledeconference.webp';  // Importation de l'image de logo
import { useState, useEffect } from 'react';
import { Particles } from '@tsparticles/react';  // Importation de la bibliothèque particles.js pour les effets de particules
import { loadSlim } from '@tsparticles/slim';  // Importation de la version slim de particles.js

export default function Main({ children }) {
    // State pour gérer le mode sombre/clair
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Fonction pour basculer entre le mode sombre et clair
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Hook pour appliquer les classes de mode sombre sur le body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Initialisation de particles.js
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <main
            className={`relative flex flex-col items-center justify-center min-h-[70vh] ${
                isDarkMode
                    ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-green' // Mode sombre : dégradé de gris et texte vert
                    : 'bg-gradient-to-b from-blue-700 to-white text-black' // Mode clair : dégradé de bleu et texte noir
            }`}
        >
            {/* Fond de particules */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: { value: isDarkMode ? '#1a1a1a' : '#ffffff' }, // Fond sombre ou clair en fonction du mode
                    },
                    particles: {
                        color: { value: isDarkMode ? '#ffffff' : '#000000' },  // Couleur des particules en fonction du mode
                        links: {
                            color: isDarkMode ? '#ffffff' : '#000000',  // Couleur des liens entre les particules
                            enable: true,  // Activer les liens entre les particules
                        },
                        move: { enable: true },  // Permet aux particules de se déplacer
                    },
                }}
                className="absolute inset-0 -z-10"  // Positionnement absolu des particules en arrière-plan
            />

            {/* Texte flottant et bouton */}
            <div className="absolute top-1/2 transform -translate-y-1/2 text-center z-20 w-full h-full flex flex-col items-center justify-center">
                {/* Image en arrière-plan couvrant toute la section */}
                <Image
                    src={logo}
                    alt="Image d'arrière-plan"
                    layout="fill" // L'image couvre toute la page
                    objectFit="cover" // L'image couvre tout l'espace sans se déformer
                    quality={100} // Qualité de l'image (optionnel, mais peut être ajustée)
                />

                {/* Titre principal */}
                <h1 className="text-3xl md:text-5xl font-bold animate-float">
                    Soyez la bienvenue sur GoEvents-app
                </h1>
                
                {/* Description */}
                <p className="mt-4 text-lg md:text-xl animate-float">
                    Explore upcoming events, conferences, and festivals.
                </p>

                {/* Bouton d'action */}
                <button
                    className="mt-6 px-6 py-3 bg-blue-900 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 animate-float"
                    onClick={() => alert("Voir les Événements clicked!")}
                >
                    Voir les Événements
                </button>
            </div>

            {/* Bouton de changement de mode sombre/clair */}
            <button
                onClick={toggleDarkMode}  // Appelle la fonction pour basculer le mode
                className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg z-50 transition-transform hover:scale-105 focus:ring focus:ring-blue-300"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {isDarkMode ? '🌞' : '🌙'}  
            </button>

            {/* Contenu principal */}
            <div className="container mx-auto max-w-4xl relative z-10 mt-8">
                {children} {/* Affiche le contenu enfant */}
            </div>
        </main>
    );
}


