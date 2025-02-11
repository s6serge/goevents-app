"use client"; // Indique que ce code s'exécute côté client

// Importation des hooks useEffect et useState depuis React
import { useEffect, useState } from "react";
// Importation du composant DisplayAgend pour afficher un événement
import DisplayAgend from "./DisplayAgend";
// Importation du composant CategoryFilter pour filtrer les événements par catégorie
import CategoryFilter from './CategoryFilter';

// Level 1: UI Components
// Composant LoadingAnimation : affiche une animation de chargement
const LoadingAnimation = () => (
    <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-light-primary dark:border-accent"></div>
    </div>
);

// Composant SearchBar : champ de recherche pour filtrer les événements
const SearchBar = ({ onSearch }) => (
    <div className="mb-6">
        <input
            type="text" // Type de l'input : texte
            placeholder="Rechercher un événement..." // Texte indicatif dans le champ de recherche
            onChange={(e) => onSearch(e.target.value)} // Appelle la fonction onSearch lors de la saisie
            className="w-full p-3 rounded-lg border border-light-border 
                     dark:border-gray-700 dark:bg-gray-800/50 
                     bg-white text-light-text-darker"
        />
    </div>
);

// Composant ErrorMessage : affiche un message d'erreur en cas de problème de chargement
const ErrorMessage = ({ error }) => (
    <div className="text-center p-8 bg-red-50 dark:bg-red-900/10 rounded-lg">
        <p className="text-red-600 dark:text-red-400">{error}</p>
    </div>
);

// Level 2: Section Components
// Composant EventCard : affiche une carte contenant les informations d'un événement
const EventCard = ({ event }) => (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
        {/* Superposition de dégradé pour améliorer la lisibilité du texte sur l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        {/* Affichage de l'image de l'événement ou d'une image par défaut */}
        <img 
            src={event.image || '/photo/default-event.webp'} 
            alt={event.title}
            className="w-full h-64 object-cover"
        />
        {/* Affichage du contenu textuel de la carte */}
        <EventCardContent event={event} />
    </div>
);

// Level 3: Feature Components
// Composant FeaturedEvents : affiche une section avec les événements à la une
const FeaturedEvents = ({ events }) => (
    <section className="mt-12 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-light-text-darker dark:text-white">
            Événements à la une
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Affiche les trois premiers événements de la liste */}
            {events.slice(0, 3).map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    </section>
);

// Composant EventList : affiche la liste des événements filtrés ou un message si aucun événement n'est trouvé
const EventList = ({ events }) => (
    <div className="space-y-6">
        {events.length > 0 ? (
            // Pour chaque événement, affiche le composant DisplayAgend
            events.map((agenda) => (
                <DisplayAgend key={agenda.id || agenda.title} doc={agenda} />
            ))
        ) : (
            // Message affiché lorsque la recherche ne renvoie aucun résultat
            <p className="text-center text-lg text-light-text dark:text-gray-500">
                Aucun événement ne correspond à votre recherche.
            </p>
        )}
    </div>
);

// Level 4: UI Elements
// Composant EventCardContent : affiche le contenu textuel (titre, description, date, lieu) sur l'image de l'événement
const EventCardContent = ({ event }) => (
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        {/* Affiche un extrait de la description de l'événement */}
        <p className="text-gray-200 text-sm mb-4">{event.description.substring(0, 100)}...</p>
        <div className="flex items-center gap-4 text-white/80">
            {/* Affiche la date de l'événement */}
            <span>📅 {event.date}</span>
            {/* Affiche le premier élément de la localisation (avant la virgule) */}
            <span>📍 {event.location.split(',')[0]}</span>
        </div>
    </div>
);

// Main Component
// Composant principal Agenda qui gère l'affichage de la liste des événements et le filtrage
export default function Agenda() {
    // Déclaration des états pour les événements, le filtre de recherche, le chargement, l'erreur et la catégorie active
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Tous");

    // Fonction pour gérer la recherche : met à jour le filtre de recherche
    const handleSearch = (term) => {
        setFilter(term);
    };

    // Hook useEffect pour récupérer les événements depuis un fichier JSON au montage du composant
    useEffect(() => {
        const fetchAgenda = async () => {
            try {
                // Récupération des données depuis le fichier JSON
                const res = await fetch("/json/Agend.json");
                // Vérification de la réponse
                if (!res.ok) throw new Error("Erreur lors du chargement des événements");
                // Conversion des données en JSON
                const data = await res.json();
                // Mise à jour de l'état des événements
                setEvents(data);
            } catch (err) {
                // Gestion de l'erreur en cas de problème de chargement
                console.error("Erreur de chargement :", err);
                setError("Impossible de charger les événements. Veuillez réessayer plus tard.");
            } finally {
                // Indique que le chargement est terminé
                setLoading(false);
            }
        };
        fetchAgenda();
    }, []); // Le tableau vide indique que l'effet se déclenche une seule fois au montage

    // Filtrage des événements selon le terme de recherche et la catégorie sélectionnée
    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(filter.toLowerCase()) ||
                            event.description.toLowerCase().includes(filter.toLowerCase());
        const matchesCategory = activeCategory === "Tous" || event.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Titre principal de la section */}
            <h1 className="text-3xl font-bold text-center mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-primary to-light-primary dark:from-accent dark:to-accent">
                    Événements à venir
                </span>
            </h1>

            {/* Zone de recherche et filtre de catégorie */}
            <div className="space-y-8">
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter onFilterChange={setActiveCategory} />
            </div>

            {/* Affichage conditionnel : animation de chargement, message d'erreur ou contenu des événements */}
            {loading ? <LoadingAnimation /> : 
             error ? <ErrorMessage error={error} /> :
             <>
                <FeaturedEvents events={events} />
                <EventList events={filteredEvents} />
             </>
            }
        </div>
    );
}
