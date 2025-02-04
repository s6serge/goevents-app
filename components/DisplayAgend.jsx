import  { useState } from "react";

export default function DisplayAgend({ doc }) {
  if (!doc || !doc.title) {
    return <div className="text-red-500">Erreur : données de l'événement manquantes ou mal formatées.</div>;
  }

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b-4 p-4 mb-4 border-blue-400 rounded-lg shadow-md transition-all duration-300">
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="text-left w-full hover:bg-gray-100 p-2 rounded transition duration-200"
      >
        <h2 className="text-xl font-semibold">{doc.title}</h2>
      </button>

      {isExpanded ? (
        <div className="mt-2 flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
          {/* Détails à gauche */}
          <div className="flex-1 border rounded-lg p-4 shadow-md sm:w-48 bg-white">
            {doc.date && <p className="text-sm text-gray-500">📅 Date : {doc.date}</p>}
            {doc.time && <p className="text-sm text-gray-500">⏰ Heure : {doc.time}</p>}
            {doc.location && <p className="text-sm text-gray-500">📍 Lieu : {doc.location}</p>}
            {doc.description && <p className="text-sm mt-2">{doc.description}</p>}
          </div>

          {/* Image à droite */}
          <div className="sm:w-48 flex justify-center">
            {doc.image ? (
              <img
                src={doc.image}
                alt={doc.title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full sm:w-48 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-md">
                Image non disponible
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-2">Cliquez pour afficher les détails.</p>
      )}
    </div>
  );
}

