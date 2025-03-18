"use client"; // Indique que ce code s'exécute côté client

import { useState } from 'react'; // Import du hook useState de React pour gérer l'état

// Niveau 1: Composant FilterButton : affiche un bouton pour une catégorie spécifique
const FilterButton = ({ category, isActive, onClick }) => (
  <button
    onClick={() => onClick(category)} // Au clic, appelle la fonction onClick en passant la catégorie
    className={`px-4 py-2 rounded-lg transition-colors
      ${isActive 
        ? 'bg-light-primary dark:bg-accent text-white'  // Style pour un bouton actif
        : 'text-light-text-darker dark:text-white hover:bg-light-primary/10 dark:hover:bg-accent/10'  // Style pour un bouton inactif
      }`}
  >
    {category} {/* Affiche le nom de la catégorie sur le bouton */}
  </button>
);

// Niveau 2: Composant CategoryList : affiche une liste de boutons de filtre pour chaque catégorie
const CategoryList = ({ categories, activeCategory, onSelect }) => (
  <div className="flex flex-wrap gap-2">
    {categories.map(category => (
      <FilterButton
        key={category} // Utilise la catégorie comme clé
        category={category} // Passe la catégorie au composant FilterButton
        isActive={activeCategory === category} // Détermine si le bouton est actif
        onClick={onSelect} // Passe la fonction de sélection de catégorie
      />
    ))}
  </div>
);

// Niveau 3: Composant FilterGroup : regroupe le titre et la liste des catégories de filtres
const FilterGroup = ({ activeCategory, onFilterChange }) => {
  const categories = ["Tous", "Conférence", "Festival", "Concert", "Exposition"]; // Liste des catégories

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-4 text-light-text-darker dark:text-white">
        Filtrer par catégorie
      </h2>
      <CategoryList
        categories={categories} // Passe la liste des catégories
        activeCategory={activeCategory} // Passe la catégorie active
        onSelect={onFilterChange} // Passe la fonction de changement de catégorie
      />
    </div>
  );
};

// Niveau 4: Composant FilterWrapper : enveloppe le groupe de filtres dans un conteneur stylisé
const FilterWrapper = ({ children }) => (
  <div className="w-full bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg shadow-sm">
    {children} {/* Affiche les éléments enfants */}
  </div>
);

// Composant principal CategoryFilter : gère l'état de la catégorie active et transmet les changements
export default function CategoryFilter({ onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState("Tous"); // État initial

  // Fonction de gestion du changement de catégorie
  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Met à jour la catégorie active
    onFilterChange(category); // Notifie le parent du changement
  };

  return (
    <FilterWrapper>
      <FilterGroup
        activeCategory={activeCategory} // Passe la catégorie active
        onFilterChange={handleCategoryChange} // Passe la fonction de gestion
      />
    </FilterWrapper>
  );
}
