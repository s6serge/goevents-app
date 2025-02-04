// components/EventCard.jsx
export default function EventCard({ title, date, location, description, imageSrc }) {
    return (
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8">
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {date} - {location}
          </p>
          <p className="text-gray-700 dark:text-gray-200">{description}</p>
        </div>
      </div>
    );
  }
  