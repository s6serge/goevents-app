// components/EventDetail.jsx
import EventCard from './EventCard';
import Link from 'next/link';

// Ce composant affiche les détails d'un événement en utilisant le composant EventCard.
// Il présente également du contenu additionnel et un lien pour revenir à l'accueil.
export default function EventDetail({ eventData, extraContent }) {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Affichage de la carte d'événement */}
        <EventCard {...eventData} />
        {/* Contenu additionnel avec une animation d'apparition */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 shadow rounded-xl animate-fadeInUp">
          {extraContent}
        </div>
        {/* Lien de retour à l'accueil, centré et stylisé */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-500 hover:underline transition duration-300"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
