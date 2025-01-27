import React, { useState } from "react";

export default function DisplayAgend({ doc }) {
  // Vérifiez que 'doc' existe avant de l'utiliser
  if (!doc || !doc.title) {
    return <div>Erreur : données de l'événement manquantes ou mal formatées.</div>;
  }

  // État pour gérer l'affichage des détails
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div key={doc.id} className="border-b-4 p-4 mb-4 border-blue-400">
      <button onClick={() => setIsExpanded(!isExpanded)} className="text-left w-full">
        <h2 className="text-xl font-semibold">{doc.title}</h2>
      </button>

      {isExpanded ? (
        <div className="mt-2 flex flex-col sm:flex-row items-start gap-4">
        {/* Affichage des détails à gauche avec une bordure */}
        <div className="flex-1 border rounded-lg p-4 shadow-md sm:w-48">
          {doc.date && <p className="text-sm text-gray-500">Date : {doc.date}</p>}
          {doc.time && <p className="text-sm text-gray-500">Heure : {doc.time}</p>}
          {doc.description && <p className="text-sm">{doc.description}</p>}
          {doc.location && <p className="text-sm text-gray-500">Lieu : {doc.location}</p>}
        </div>
      
        {/* Affichage de l'image à droite */}
        {doc.image && (
          <img
            src={doc.image}
            alt={doc.title}
            className="w-full sm:w-48 h-auto object-cover rounded-lg shadow-md"
          />
        )}
      </div>
      
      
      
      ) : (
        <p className="text-gray-500 mt-2">Cliquez pour afficher les détails.</p>
      )}
    </div>
  );
}


