// app/event1/page.jsx
import EventCard from '@/components/EventCard';

export default function Event1Page() {
  const eventData = {
    title: "Concert Night",
    date: "25 Décembre 2023, 20:00",
    location: "Paris, La Salle Pleyel",
    description:
      "Rejoignez-nous pour une soirée inoubliable avec des performances live de musiciens renommés. Venez profiter d'une ambiance électrisante et d'une expérience musicale unique.",
    imageSrc: "/concert.jpg", // Make sure to add this image in the public folder
  };

  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <EventCard {...eventData} />
      </div>
    </div>
  );
}
