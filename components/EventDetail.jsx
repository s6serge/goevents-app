// components/EventDetail.jsx
import EventCard from './EventCard';
import Link from 'next/link';

export default function EventDetail({ eventData, extraContent }) {
  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Display the event summary */}
        <EventCard {...eventData} />

        {/* Extra detailed information */}
        <div className="mt-6 text-gray-800 dark:text-gray-200">
          {extraContent}
        </div>

        {/* A link to go back to the home page */}
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
