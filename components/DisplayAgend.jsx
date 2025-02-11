import { useState } from "react"; // Import du hook useState depuis React pour gérer l'état

// Level 1: UI Components
// Composant ImageComponent : affiche une image ou, si aucune source n'est fournie, un message indiquant que l'image est indisponible
const ImageComponent = ({ src, alt }) => {
    // Si aucune source n'est fournie, affiche un conteneur avec le message "Image non disponible"
    if (!src) return (
        <div className="w-full sm:w-48 h-32 dark:bg-gray-800 bg-gray-200 
                       flex items-center justify-center dark:text-gray-400 
                       text-gray-500 rounded-lg">
            Image non disponible
        </div>
    );

    // Sinon, affiche l'image avec les propriétés spécifiées
    return (
        <img
            src={src} // Source de l'image
            alt={alt} // Texte alternatif pour l'image
            loading="lazy" // Chargement paresseux de l'image
            className="w-full h-auto object-cover rounded-lg" // Styles CSS appliqués à l'image
            width={192} // Largeur de l'image
            height={128} // Hauteur de l'image
        />
    );
};

// Level 2: Section Components
// Composant EventBadge : affiche un badge indiquant le type ou la catégorie de l'événement
const EventBadge = ({ type }) => (
    <span className="inline-block px-3 py-1 text-sm rounded-full
                   bg-light-primary/10 dark:bg-accent/10 
                   text-light-primary dark:text-accent">
        {type} {/* Affiche le type ou la catégorie de l'événement */}
    </span>
);

// Composant EventDetails : affiche les détails de l'événement comme la date, l'heure, le lieu et la description
const EventDetails = ({ date, time, location, description }) => (
    <div className="flex-1 border dark:border-gray-700 rounded-lg p-4 
                    sm:w-48 dark:bg-gray-800/50 bg-white">
        {date && (
            <p className="text-sm dark:text-gray-300 text-gray-500 mb-2">
                📅 Date : {date}
            </p>
        )}
        {time && (
            <p className="text-sm dark:text-gray-300 text-gray-500 mb-2">
                ⏰ Heure : {time}
            </p>
        )}
        {location && (
            <p className="text-sm dark:text-gray-300 text-gray-500 mb-2">
                📍 Lieu : {location}
            </p>
        )}
        {description && (
            <p className="text-sm mt-2 dark:text-gray-200 text-gray-700">
                {description}
            </p>
        )}
    </div>
);

// Level 3: Feature Components
// Composant ExpandableContent : affiche un contenu extensible qui montre ou masque les détails de l'événement
const ExpandableContent = ({ isExpanded, doc }) => {
    // Si le contenu n'est pas étendu, affiche un message invitant à cliquer pour afficher les détails
    if (!isExpanded) return (
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Cliquez pour afficher les détails ↓
        </p>
    );

    // Si le contenu est étendu, affiche les détails de l'événement et son image
    return (
        <div className="mt-2 flex flex-col sm:flex-row items-start gap-4">
            <EventDetails {...doc} /> {/* Passe toutes les propriétés de l'événement au composant EventDetails */}
            <div className="sm:w-48 flex justify-center">
                <ImageComponent src={doc.image} alt={doc.title} /> {/* Affiche l'image de l'événement */}
            </div>
        </div>
    );
};

// Level 4: UI Elements
// Composant ExpandButton : bouton qui permet d'étendre ou de réduire l'affichage des détails de l'événement
const ExpandButton = ({ isExpanded, onClick, title, category }) => (
    <button 
        onClick={onClick}  // Appelle la fonction onClick pour basculer l'état d'expansion
        className="text-left w-full rounded p-4
                  flex justify-between items-center">
        <div className="flex flex-col gap-2">
            {/* Affiche le titre de l'événement avec une icône */}
            <h2 className="text-xl font-semibold dark:text-white text-gray-900 
                         flex items-center gap-3">
                <span className="text-light-primary dark:text-accent">📅</span>
                {title}
            </h2>
            <EventBadge type={category || "Événement"} /> {/* Affiche le badge avec la catégorie de l'événement */}
        </div>
        {/* Affiche une flèche indiquant si le contenu est étendu ou réduit */}
        <span className="text-light-primary dark:text-accent">
            {isExpanded ? '▼' : '▶'}
        </span>
    </button>
);

// Main Component
// Composant principal DisplayAgend : affiche une carte détaillée pour un événement avec possibilité d'extension
export default function DisplayAgend({ doc }) {
    const [isExpanded, setIsExpanded] = useState(false); // Déclare un état pour gérer l'expansion du contenu

    // Vérifie que le document de l'événement existe et contient un titre, sinon affiche un message d'erreur
    if (!doc || !doc.title) {
        return <div className="text-red-500">Erreur : données de l'événement manquantes</div>;
    }

    return (
        <div className="border-b-4 p-6 mb-6 border-light-primary dark:border-accent rounded-lg 
                        bg-white dark:bg-gray-800/50">
            {/* Bouton d'extension qui affiche ou masque les détails de l'événement */}
            <ExpandButton 
                isExpanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)} // Bascule l'état d'expansion lors du clic
                title={doc.title}
                category={doc.category}
            />
            {/* Contenu extensible qui affiche les détails et l'image de l'événement */}
            <ExpandableContent isExpanded={isExpanded} doc={doc} />
        </div>
    );
}
