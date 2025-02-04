// components/EventCard.jsx
export default function EventCard({ title, date, location, description, imageSrc }) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8 transform transition duration-300 hover:scale-105">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
            {date} - {location}
          </p>
          <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base">{description}</p>
        </div>
      </div>
    );
  }
  