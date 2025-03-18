import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

// Level 1: UI Components
// Composant MenuItem : représente un élément individuel du menu de navigation
const MenuItem = ({ href, text, isActive }) => (
    <li className="w-full">
        <Link
            href={href}
            className={`px-4 py-2 rounded-lg text-white whitespace-nowrap block
                      ${isActive 
                        ? 'bg-light-primary dark:bg-accent' 
                        : 'hover:bg-light-primary/80 dark:hover:bg-accent/80'
                      } transition-colors`}
        >
            {text}
        </Link>
    </li>
);

// Level 2: Navigation Components
// Composant NavList : affiche une liste d'éléments de menu (MenuItem) dans une structure de liste
const NavList = ({ items, currentPath }) => (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        {items.map(({ href, text }) => (
            <MenuItem
                key={href}
                href={href}
                text={text}
                isActive={currentPath === href}
            />
        ))}
    </ul>
);

// Level 3: Feature Components
// Composant NavWrapper : conteneur pour envelopper le menu de navigation
const NavWrapper = ({ children }) => (
    <div className="relative">
        {children}
    </div>
);

// Level 4: UI Elements
// Composant NavigationMenu : affiche le menu de navigation avec une transition de translation
const NavigationMenu = ({ menuOpen }) => {
    const { t } = useTranslation();
    const currentPath = usePathname();

    return (
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
                        { href: '/', text: t('header.home') },
                        { href: '/agenda', text: t('header.documents') },
                        { href: '/contact', text: t('header.contact') },
                        { href: '/envoicontact', text: t('header.envoicontact') },
                        { href: '/connexion', text: t('header.login') },
                    ]}
                    currentPath={currentPath}
                />
            </div>
        </nav>
    );
};

// Main Component
export function MenuNav({ menuOpen }) {
    return (
        <NavWrapper>
            <NavigationMenu menuOpen={menuOpen} />
        </NavWrapper>
    );
}
