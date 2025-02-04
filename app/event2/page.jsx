// app/event2/page.jsx
import EventDetail from '@/components/EventDetail';

export default function Event2Page() {
  const eventData = {
    title: "Art Exhibition",
    date: "5 Janvier 2024, 10:00",
    location: "Lyon, Musée des Beaux-Arts",
    description:
      "Découvrez une exposition captivante mettant en lumière des artistes émergents et des œuvres d'art innovantes. Une occasion unique de plonger dans le monde de l'art contemporain.",
    imageSrc: "/art.jpg", // Place your art image in the public folder
  };

  const extraContent = (
    <p>
      Les artistes participants et les horaires détaillés seront disponibles sur le site prochainement.
    </p>
  );

  return <EventDetail eventData={eventData} extraContent={extraContent} />;
}
