'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// Création du contexte pour stocker le thème
const ThemeContext = createContext();

// Composant ThemeProvider qui fournit le thème à tous ses enfants
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Au montage, récupère le thème sauvegardé dans le localStorage (ou "light" par défaut)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Fonction pour changer le thème et le sauvegarder dans le localStorage
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte du thème
export function useTheme() {
  return useContext(ThemeContext);
}
