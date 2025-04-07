"use client"; // Indique que ce fichier est un composant côté client
import Link from 'next/link';

import { useState } from "react"; // Import du hook useState (non utilisé ici, mais utile pour état dynamique)
import { ToastContainer } from "react-toastify"; // Import du composant permettant d'afficher des notifications Toast
import "react-toastify/dist/ReactToastify.css"; // Import du fichier CSS de react-toastify pour styliser les notifications
import Stats from './Stats'; // Import du composant affichant les statistiques
import Agenda from "./Agenda"; // Import du composant de l'agenda

// Composant StatCard : carte affichant une statistique avec un nombre et une description
const StatCard = ({ number, label }) => (
    <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm 
                    rounded-lg shadow-lg hover:transform hover:-translate-y-1 
                    transition-all duration-300">
        <span className="text-3xl font-bold text-secondary dark:text-accent">
            {number} {/* Affichage du chiffre de la statistique */}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">
            {label} {/* Affichage de la description de la statistique */}
        </span>
    </div>
);

// Niveau 1 : Composants UI (interface utilisateur)
// Composant HeroTitle : titre principal de la page d'accueil
const HeroTitle = () => (
    <h1 className="text-6xl md:text-8xl font-bold mb-8 
                   bg-clip-text text-transparent 
                   bg-gradient-to-r from-light-primary via-light-primary/80 to-light-primary dark:from-primary dark:via-accent dark:to-accent">
        GoEvents-app
    </h1>
);

// Niveau 1 : Composants UI
// Composant Description : texte descriptif sous le titre principal
const Description = () => (
    <p className="text-xl md:text-3xl mb-12 text-gray-700 dark:text-gray-300 
                  max-w-3xl mx-auto leading-relaxed">
        Découvrez et participez aux meilleurs événements professionnels et culturels.
    </p>
);

// Niveau 2 : Composants de Section
// Composant HeroSection : regroupe le titre, la description et les boutons d'action
const HeroSection = ({ onEventClick }) => (
    <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="text-center">
                <HeroTitle /> {/* Affichage du titre principal */}
                <Description /> {/* Affichage de la description */}
                <ActionButtons onEventClick={onEventClick} /> {/* Affichage des boutons d'action */}
            </div>
        </div>
    </div>
);

// Niveau 3 : Composants de Contenu
// Composant HomeContent : section principale affichant le titre, la description et les statistiques
const HomeContent = ({ onEventClick }) => (
    <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-12">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <HeroTitle /> {/* Affichage du titre principal */}
                    <Description /> {/* Affichage de la description */}
                    <ActionButtons onEventClick={onEventClick} /> {/* Affichage des boutons d'action */}
                </div>
                <Stats /> {/* Affichage du composant des statistiques */}
            </div>
        </div>
    </div>
);

// Niveau 4 : Éléments UI
// Composant ActionButtons : boutons permettant d'accéder aux événements ou à la page de contact
const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
    <Link
      href="/agenda"
      className="px-8 py-3 text-lg font-medium text-white 
                 bg-light-primary dark:bg-accent rounded-full 
                 hover:bg-light-primary/90 dark:hover:bg-accent/90 text-center"
    >
      Voir les Événements
    </Link>
    <Link
      href="/envoicontact"
      className="px-8 py-3 text-lg font-medium 
                 text-light-primary dark:text-accent border-2 
                 border-light-primary dark:border-accent rounded-full
                 hover:bg-light-primary/10 dark:hover:bg-accent/10 text-center"
    >
      Nous Contacter
    </Link>
  </div>
);


// const ActionButtons = () => (
//   <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//     <Link href="/agenda">
//       <a
//         className="px-8 py-3 text-lg font-medium text-white 
//                    bg-light-primary dark:bg-accent rounded-full 
//                    hover:bg-light-primary/90 dark:hover:bg-accent/90 text-center"
//       >
//         Voir les Événements
//       </a>
//     </Link>
//     <Link href="/envoicontact">
//       <a
//         className="px-8 py-3 text-lg font-medium 
//                    text-light-primary dark:text-accent border-2 
//                    border-light-primary dark:border-accent rounded-full
//                    hover:bg-light-primary/10 dark:hover:bg-accent/10 text-center"
//       >
//         Nous Contacter
//       </a>
//     </Link>
//   </div>
// );





// const ActionButtons = ({ onEventClick }) => (
//     <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//         <button
//             onClick={onEventClick} // Appelle la fonction de navigation vers la page des événements
//             className="px-8 py-3 text-lg font-medium text-white
//                      bg-light-primary dark:bg-accent rounded-full
//                      hover:bg-light-primary/90 dark:hover:bg-accent/90"
//         >
//             Voir les Événements
//         </button>
//         <button
//             onClick={() => window.location.href = ''} // Redirige vers la section contact
//             className="px-8 py-3 text-lg font-medium
//                      text-light-primary dark:text-accent border-2
//                      border-light-primary dark:border-accent rounded-full
//                      hover:bg-light-primary/10 dark:hover:bg-accent/10"
//         >
//             Nous Contacter
//         </button>
//     </div>
// );



// Composant principal Accueil : structure et affiche la page d'accueil de l'application
export default function Accueil({ changePage }) {
    // Fonction déclenchée lors du clic sur "Voir les Événements"
    const handleEventClick = () => {
        changePage('agenda'); // Change la page active vers "agenda"
    };

    return (
        <main className="min-h-screen w-full">
            {/* Fond en dégradé pour l'arrière-plan */}
            <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 -z-5" />

            {/* Contenu principal de la page */}
            <div className={`relative z-10 transition-opacity duration-300`}>
                <HomeContent onEventClick={handleEventClick} /> {/* Affichage du contenu principal */}
            </div>

            {/* ToastContainer : permet d'afficher des notifications toast */}
            <ToastContainer position="top-center" autoClose={3000} />
        </main>
    );
}
