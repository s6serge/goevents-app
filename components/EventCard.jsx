// components/EventCard.jsx
// Ce composant affiche une carte d'événement avec une image (.webp),
// un titre, une date, un lieu et une description.
// Il est optimisé pour être responsive et inclut des effets de transition modernes.
export default function EventCard({ title, date, location, description, imageSrc }) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden mb-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Image de l'événement au format .webp */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 md:h-80 lg:h-96 object-cover transition duration-300"
        />
        <div className="p-4 md:p-6">
          {/* Titre de l'événement */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-white">
            {title}
          </h2>
          {/* Date et lieu */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
            {date} - {location}
          </p>
          {/* Description de l'événement */}
          <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    );
  }
  