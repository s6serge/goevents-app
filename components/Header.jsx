"use client"; // Indique que ce module s'exécute côté client

import Image from "next/image"; // Importation du composant Image de Next.js pour l'optimisation des images
import { useState } from 'react'; // Importation du hook useState pour la gestion de l'état local
import { MenuNav } from "./MenuNav"; // Importation du composant MenuNav pour la navigation

// Level 1: UI Components
// Composant LogoSection : affiche le logo du site et le nom du site
const LogoSection = () => (
    <div className="flex items-center gap-2">
        {/* Conteneur pour le logo */}
        <div className="flex items-center justify-center bg-white rounded-full w-12 h-12 md:w-16 md:h-16 overflow-hidden">
            <Image
                src="/photo/logodusite.webp" // Chemin de l'image du logo
                alt="Logo site gestion des événements" // Texte alternatif pour l'image
                width={48} // Largeur de l'image
                height={48} // Hauteur de l'image
                className="w-full h-full md:w-full md:h-full object-cover rounded-full" // Styles pour afficher l'image en mode responsive et arrondie
            />
        </div>
        {/* Affichage du nom du site */}
        <h1 className="text-xl md:text-3xl font-bold text-light-primary dark:text-accent">
            GO Event
        </h1>
    </div>
);

// Level 2: Navigation Components
// Composant NavItem : représente un élément de navigation avec un lien
const NavItem = ({ href, text, isActive, onClick }) => (
    <a
        href={href} // URL de destination
        onClick={onClick} // Fonction appelée lors du clic
        className={`px-4 py-2 rounded-lg text-white whitespace-nowrap
                   ${isActive 
                     ? 'bg-light-primary dark:bg-accent' // Style pour l'élément actif
                     : 'hover:bg-light-primary/80 dark:hover:bg-accent/80' // Style au survol pour l'élément inactif
                   } transition-colors`}
    >
        {text} {/* Texte affiché pour le lien */}
    </a>
);

// Level 3: Feature Components
// Composant MenuButton : bouton pour ouvrir ou fermer le menu sur mobile
const MenuButton = ({ isOpen, onClick }) => (
    <button
        onClick={onClick} // Bascule l'état du menu lors du clic
        className="lg:hidden text-2xl text-white p-2 ml-auto 
                   hover:bg-light-primary/20 dark:hover:bg-accent/20 
                   rounded-lg transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'} // Attribut ARIA pour l'accessibilité
    >
        {isOpen ? '✕' : '☰'} {/* Affiche une croix si le menu est ouvert, sinon un symbole de menu */}
    </button>
);

// Composant NavigationMenu : affiche le menu de navigation selon la taille de l'écran
const NavigationMenu = ({ changePage, menuOpen }) => (
    <>
        {/* Affichage du menu sur les grands écrans */}
        <div className="hidden lg:block">
            <MenuNav changePage={changePage} menuOpen={false} />
        </div>
        {/* Affichage du menu sur les petits écrans */}
        <div className="lg:hidden">
            <MenuNav changePage={changePage} menuOpen={menuOpen} />
        </div>
    </>
);

// Level 4: UI Elements
// Composant HeaderWrapper : conteneur principal de l'en-tête
const HeaderWrapper = ({ children }) => (
    <header className="bg-primary text-white py-4 md:py-8 sticky top-0 z-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {children} {/* Insertion des éléments enfants */}
        </div>
    </header>
);

// Main Component
// Composant principal Header : combine le logo et la navigation dans l'en-tête du site
export default function Header({ changePage }) {
    const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu mobile

    return (
        <HeaderWrapper>
            <LogoSection /> {/* Affiche la section du logo */}
            <div className="flex items-center gap-4">
                <MenuButton 
                    isOpen={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)} // Bascule l'état du menu lors du clic
                />
                <NavigationMenu changePage={changePage} menuOpen={menuOpen} /> {/* Affiche le menu de navigation */}
            </div>
        </HeaderWrapper>
    );
}

export { NavItem }; // Exportation du composant NavItem pour une utilisation externe
