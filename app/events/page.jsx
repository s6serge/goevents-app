// app/events/page.jsx
import Link from 'next/link';

export default function EventsOverview() {
  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Tous les événements
        </h1>
        <ul className="space-y-4">
          <li>
            <Link
              href="/event1"
              className="block p-4 bg-white dark:bg-gray-800 shadow rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Concert Night</h2>
              <p className="text-gray-600 dark:text-gray-300">
                25 Décembre 2023, 20:00 - Paris, La Salle Pleyel
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/event2"
              className="block p-4 bg-white dark:bg-gray-800 shadow rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Art Exhibition</h2>
              <p className="text-gray-600 dark:text-gray-300">
                5 Janvier 2024, 10:00 - Lyon, Musée des Beaux-Arts
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
