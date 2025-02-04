// app/event1/page.jsx
import EventDetail from '@/components/EventDetail';

export default function Event1Page() {
  const eventData = {
    title: "Concert Night",
    date: "25 Décembre 2023, 20:00",
    location: "Paris, La Salle Pleyel",
    description:
      "Rejoignez-nous pour une soirée inoubliable avec des performances live de musiciens renommés. Venez profiter d'une ambiance électrisante et d'une expérience musicale unique.",
    imageSrc: "/concert.svg", // Place your concert image in the public folder
  };

  const extraContent = (
    <p>
      Plus d'informations sur l'événement, y compris les horaires et les invités spéciaux, seront annoncées prochainement.
    </p>
  );

  return <EventDetail eventData={eventData} extraContent={extraContent} />;
}
