"use client"; // Indique que ce code s'exécute côté client

import { useState } from "react"; // Import du hook useState depuis React (même s'il n'est pas utilisé dans ce fichier)
import { ToastContainer } from "react-toastify"; // Import du composant pour afficher les notifications toast
import "react-toastify/dist/ReactToastify.css"; // Import des styles CSS pour react-toastify
import Stats from './Stats'; // Import du composant Stats
import Agenda from "./Agenda"; // Import du composant Agenda

// Composant StatCard : affiche une carte de statistique avec un nombre et un libellé
const StatCard = ({ number, label }) => (
    <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm 
                    rounded-lg shadow-lg hover:transform hover:-translate-y-1 
                    transition-all duration-300">
        <span className="text-3xl font-bold text-secondary dark:text-accent">
            {number} {/* Affiche le nombre de la statistique */}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">
            {label} {/* Affiche le libellé de la statistique */}
        </span>
    </div>
);

// Level 1: UI Components
// Composant HeroTitle : affiche le titre principal de l'application
const HeroTitle = () => (
    <h1 className="text-6xl md:text-8xl font-bold mb-8 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-light-primary via-light-primary/80 to-light-primary dark:from-primary dark:via-accent dark:to-accent">
        GoEvents-app
    </h1>
);

// Level 1: UI Components
// Composant Description : affiche une description pour inciter l'utilisateur à découvrir les événements
const Description = () => (
    <p className="text-xl md:text-3xl mb-12 text-gray-700 dark:text-gray-300 
                  max-w-3xl mx-auto leading-relaxed">
        Découvrez et participez aux meilleurs événements professionnels et culturels
    </p>
);

// Level 2: Section Components
// Composant HeroSection : regroupe le titre, la description et les boutons d'action dans une section de présentation
const HeroSection = ({ onEventClick }) => (
    <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="text-center">
                <HeroTitle /> {/* Affiche le titre principal */}
                <Description /> {/* Affiche la description */}
                <ActionButtons onEventClick={onEventClick} /> {/* Affiche les boutons d'action */}
            </div>
        </div>
    </div>
);

// Level 3: Content Components
// Composant HomeContent : contient l'ensemble du contenu principal de la page d'accueil
const HomeContent = ({ onEventClick }) => (
    <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-12">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <HeroTitle /> {/* Affiche le titre principal */}
                    <Description /> {/* Affiche la description */}
                    <ActionButtons onEventClick={onEventClick} /> {/* Affiche les boutons d'action */}
                </div>
                <Stats /> {/* Affiche le composant des statistiques */}
            </div>
        </div>
    </div>
);

// Level 4: UI Elements
// Composant ActionButtons : affiche les boutons permettant de naviguer vers la liste des événements ou la section de contact
const ActionButtons = ({ onEventClick }) => (
    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        <button
            onClick={onEventClick} // Appelle la fonction onEventClick lors du clic
            className="px-8 py-3 text-lg font-medium text-white 
                     bg-light-primary dark:bg-accent rounded-full 
                     hover:bg-light-primary/90 dark:hover:bg-accent/90"
        >
            Voir les Événements
        </button>
        <button
            onClick={() => window.location.href = ''} // Redirige vers la section contact lors du clic
            className="px-8 py-3 text-lg font-medium 
                     text-light-primary dark:text-accent border-2 
                     border-light-primary dark:border-accent rounded-full
                     hover:bg-light-primary/10 dark:hover:bg-accent/10"
        >
            Nous Contacter
        </button>
    </div>
);

// Composant principal Accueil : représente la page d'accueil de l'application
export default function Accueil({ changePage }) {
    // Fonction de gestion du clic sur le bouton "Voir les Événements"
    const handleEventClick = () => {
        changePage('agenda'); // Change la page affichée vers 'agenda'
    };

    return (
        <main className="min-h-screen w-full">
            {/* Background : un dégradé en arrière-plan */}
            <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 -z-5" />

            {/* Content : le contenu principal de la page */}
            <div className={`relative z-10 transition-opacity duration-300`}>
                <HomeContent onEventClick={handleEventClick} /> {/* Affiche le contenu principal */}
            </div>

            {/* ToastContainer : composant pour afficher les notifications toast */}
            <ToastContainer position="top-center" autoClose={3000} />
        </main>
    );
}
