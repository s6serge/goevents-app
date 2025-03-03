import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état
import { NavItem } from './Header'; // Importation du composant NavItem depuis le fichier Header

// Level 1: UI Components
// Composant MenuItem : représente un élément individuel du menu de navigation
const MenuItem = ({ text, isActive, onClick }) => (
    <li className="w-full">
        <NavItem
            href="#"
            text={text}
            isActive={isActive}
            onClick={onClick}
        />
    </li>
);

// Level 2: Navigation Components
// Composant NavList : affiche une liste d'éléments de menu (MenuItem) dans une structure de liste
const NavList = ({ items, currentPage, onPageChange }) => (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        {items.map(({ id, text }) => (
            <MenuItem
                key={id}
                text={text}
                isActive={currentPage === id}
                onClick={(e) => {
                    e.preventDefault(); // Empêche le comportement par défaut du lien
                    onPageChange(id); // Change la page actuelle en fonction de l'élément cliqué
                }}
            />
        ))}
    </ul>
);

// Level 3: Feature Components
// Composant NavWrapper : conteneur pour envelopper le menu de navigation, permettant une position relative
const NavWrapper = ({ children }) => (
    <div className="relative">
        {children}
    </div>
);

// Level 4: UI Elements
// Composant NavigationMenu : affiche le menu de navigation avec une transition de translation
const NavigationMenu = ({ menuOpen, currentPage, onPageChange }) => (
  <nav
    className={`bg-primary p-4 
                    lg:bg-transparent
                    border-l border-t border-light-primary/20 dark:border-accent/20
                    shadow-lg lg:shadow-none
                    lg:w-auto lg:border-none lg:p-0 lg:static
                    transition-transform duration-200 ease-in-out
                    fixed right-0 top-[72px] w-64
                    max-h-[calc(100vh-72px)]
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
                    lg:translate-x-0
                    `}
  >
    <div className="flex flex-col space-y-4">
      <NavList
        items={[
          { id: 'accueil', text: 'Accueil' },
          { id: 'agenda', text: 'Agenda' },
          { id: 'contact', text: 'Ajout Event' },
          { id: 'envoicontact', text: 'Contact' },
          { id: 'espace', text: 'Espace Client' },
        ]}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  </nav>
);

// Main Component
// Composant MenuNav : composant principal du menu de navigation qui gère l'état de la page courante
export function MenuNav({ changePage, menuOpen }) {
    // Déclaration de l'état currentPage avec la valeur par défaut "accueil"
    const [currentPage, setCurrentPage] = useState('accueil');

    // Fonction de gestion du changement de page : met à jour l'état et appelle la fonction changePage du parent
    const handlePageChange = (page) => {
        setCurrentPage(page);
        changePage(page);
    };

    return (
        <NavWrapper>
            <NavigationMenu
                menuOpen={menuOpen}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </NavWrapper>
    );
}
