// app/event2/page.jsx
import EventCard from '@/components/EventCard';

export default function Event2Page() {
  const eventData = {
    title: "Art Exhibition",
    date: "5 Janvier 2024, 10:00",
    location: "Lyon, Musée des Beaux-Arts",
    description:
      "Découvrez une exposition captivante mettant en lumière des artistes émergents et des œuvres d'art innovantes. Une occasion unique de plonger dans le monde de l'art contemporain.",
    imageSrc: "/art.jpg", // Make sure to add this image in the public folder
  };

  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <EventCard {...eventData} />
      </div>
    </div>
  );
}
