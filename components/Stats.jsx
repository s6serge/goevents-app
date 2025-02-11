"use client"; // Indique que ce module s'exécute côté client

// Level 1: UI Components
// Composant StatNumber : affiche un nombre avec un style particulier
const StatNumber = ({ number }) => (
    <span className="text-3xl font-bold text-light-primary dark:text-accent">
        {number} {/* Affiche le nombre passé en prop */}
    </span>
);

// Composant StatLabel : affiche un libellé (label) avec un style adapté
const StatLabel = ({ label }) => (
    <span className="text-sm text-gray-600 dark:text-gray-300">
        {label} {/* Affiche le texte du label passé en prop */}
    </span>
);

// Level 2: Section Components
// Composant StatCard : regroupe StatNumber et StatLabel dans une carte stylisée
const StatCard = ({ number, label }) => (
    <div className="flex flex-col items-center p-4 
                    bg-white dark:bg-gray-800/50 backdrop-blur-sm 
                    rounded-lg shadow-lg
                    border border-light-primary/20 dark:border-accent/20
                    hover:border-light-primary dark:hover:border-accent
                    transition-colors">
        <StatNumber number={number} /> {/* Affiche le nombre */}
        <StatLabel label={label} />    {/* Affiche le libellé */}
    </div>
);

// Level 3: Feature Components
// Composant StatGrid : dispose un ensemble de StatCard dans une grille responsive
const StatGrid = ({ stats }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
            <StatCard key={index} {...stat} /> /* Passe les props de chaque stat à StatCard */
        ))}
    </div>
);

// Main Component
// Composant principal Stats : définit les statistiques et les affiche via StatGrid
export default function Stats() {
    // Tableau de statistiques à afficher
    const stats = [
        { number: "500+", label: "Événements" },
        { number: "10K+", label: "Participants" },
        { number: "50+", label: "Partenaires" },
        { number: "4.8/5", label: "Satisfaction" }
    ];

    return <StatGrid stats={stats} />; // Affiche la grille de statistiques
}
