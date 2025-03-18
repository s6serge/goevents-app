"use client"; // Indique que ce module s'exécute côté client

import Image from "next/image";
import { useState } from 'react';
import { MenuNav } from "./MenuNav";
import { useTheme } from "@/components/ThemeProvider"; // Hook pour accéder au thème
import i18next from 'i18next';

// Level 1: UI Components
// Composant LogoSection : affiche le logo du site et le nom du site
const LogoSection = () => (
  <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
    <div className="flex items-center justify-center bg-white rounded-full w-12 h-12 md:w-16 md:h-16 overflow-hidden">
      <Image
        src="/photo/logodusite.webp"
        alt="Logo site gestion des événements"
        width={48}
        height={48}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
    <h1 className="text-xl md:text-3xl font-bold text-light-primary dark:text-accent">
      GO Event
    </h1>
  </a>
);

// Level 2: Navigation Components
// Composant NavItem : représente un élément de navigation avec un lien
const NavItem = ({ href, text, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-white whitespace-nowrap
      ${isActive 
        ? 'bg-light-primary dark:bg-accent'
        : 'hover:bg-light-primary/80 dark:hover:bg-accent/80'
      } transition-colors`}
  >
    {text}
  </a>
);

// Level 3: Feature Components
// Composant MenuButton : bouton pour ouvrir/fermer le menu sur mobile
const MenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="lg:hidden text-2xl text-white p-2 ml-auto 
               hover:bg-light-primary/20 dark:hover:bg-accent/20 
               rounded-lg transition-colors"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? '✕' : '☰'}
  </button>
);

// Composant NavigationMenu : affiche le menu de navigation selon la taille de l'écran
const NavigationMenu = ({ changePage, menuOpen }) => (
  <>
    {/* Menu en version large */}
    <div className="hidden lg:block">
      <MenuNav changePage={changePage} menuOpen={false} />
    </div>
    {/* Menu en version mobile */}
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
      {children}
    </div>
  </header>
);

// Main Component
// Composant principal Header : combine le logo, la navigation et le bouton de changement de thème
export default function Header({ changePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  // Récupère le thème actuel et la fonction pour le modifier
  const [theme, setTheme] = useTheme();

  // Fonction pour basculer le thème (light/dark)
  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <HeaderWrapper>
      <LogoSection />
      <div className="flex items-center gap-4">
        <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <NavigationMenu changePage={changePage} menuOpen={menuOpen} />

        {/* Bouton Dark Mode */}
        <button
          onClick={handleThemeToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-light-primary dark:bg-accent text-white
                     hover:bg-light-primary/80 dark:hover:bg-accent/80
                     transition-colors"
        >
          {/* On affiche un emoji différent selon le thème */}
          {theme === 'dark' ? '🌞' : '🌙'}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Sélecteur de langue */}
        <select
          onChange={(e) => i18next.changeLanguage(e.target.value)}
          defaultValue={i18next.language}
          className="px-3 py-2 rounded-lg bg-light-primary dark:bg-accent text-white 
                     cursor-pointer border-none outline-none 
                     hover:bg-light-primary/80 dark:hover:bg-accent/80 
                     transition-colors text-sm font-medium"
        >
          <option value="en" className="bg-primary text-white">EN</option>
          <option value="fr" className="bg-primary text-white">FR</option>
        </select>
      </div>
    </HeaderWrapper>
  );
}

// Exportation optionnelle si tu en as besoin ailleurs
export { NavItem };
