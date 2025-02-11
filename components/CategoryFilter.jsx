"use client"; // Indique que ce code s'exécute côté client

import { useState } from 'react'; // Import du hook useState de React pour gérer l'état

// Level 1: UI Components
// Composant FilterButton : affiche un bouton pour une catégorie spécifique
const FilterButton = ({ category, isActive, onClick }) => (
    <button
        onClick={() => onClick(category)} // Au clic, appelle la fonction onClick en passant la catégorie
        className={`px-4 py-2 rounded-lg transition-colors
                   ${isActive 
                     ? 'bg-light-primary dark:bg-accent text-white'  // Style pour un bouton actif
                     : 'text-light-text-darker dark:text-white hover:bg-light-primary/10 dark:hover:bg-accent/10' // Style pour un bouton inactif
                   }`}
    >
        {category} {/* Affiche le nom de la catégorie sur le bouton */}
    </button>
);

// Level 2: Section Components
// Composant CategoryList : affiche une liste de boutons de filtre pour chaque catégorie
const CategoryList = ({ categories, activeCategory, onSelect }) => (
    <div className="flex flex-wrap gap-2">
        {categories.map(category => (
            <FilterButton
                key={category} // Utilise la catégorie comme clé
                category={category} // Passe la catégorie au composant FilterButton
                isActive={activeCategory === category} // Détermine si le bouton est actif en comparant avec la catégorie active
                onClick={onSelect} // Passe la fonction de sélection de catégorie
            />
        ))}
    </div>
);

// Level 3: Feature Components
// Composant FilterGroup : regroupe le titre et la liste des catégories de filtres
const FilterGroup = ({ activeCategory, onFilterChange }) => {
    const categories = ["Tous", "Conférence", "Festival", "Concert", "Exposition"]; // Définition des catégories disponibles
    
    return (
        <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4 text-light-text-darker dark:text-white">
                Filtrer par catégorie
            </h2>
            <CategoryList
                categories={categories} // Passe la liste des catégories au composant CategoryList
                activeCategory={activeCategory} // Passe la catégorie active
                onSelect={onFilterChange} // Passe la fonction de changement de filtre
            />
        </div>
    );
};

// Level 4: UI Elements
// Composant FilterWrapper : enveloppe le groupe de filtres dans un conteneur stylisé
const FilterWrapper = ({ children }) => (
    <div className="w-full bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow-sm">
        {children} {/* Affiche les éléments enfants */}
    </div>
);

// Main Component
// Composant principal CategoryFilter qui gère l'état de la catégorie active et transmet les changements
export default function CategoryFilter({ onFilterChange }) {
    const [activeCategory, setActiveCategory] = useState("Tous"); // Initialise l'état avec la catégorie "Tous"

    // Fonction de gestion du changement de catégorie
    const handleCategoryChange = (category) => {
        setActiveCategory(category); // Met à jour la catégorie active
        onFilterChange(category); // Notifie le composant parent du changement
    };

    return (
        <FilterWrapper>
            <FilterGroup
                activeCategory={activeCategory} // Passe la catégorie active au FilterGroup
                onFilterChange={handleCategoryChange} // Passe la fonction de gestion du changement de catégorie
            />
        </FilterWrapper>
    );
}
