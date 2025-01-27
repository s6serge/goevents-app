'use client';
import { useEffect, useState } from "react";
import DisplayAgend from "./DisplayAgend";

export default function Agenda() {
  const [agendaData, setAgendaData] = useState([]);

  // Charger les événements depuis le fichier JSON
  useEffect(() => {
    const fetchAgenda = async () => {
      const res = await fetch("/json/Agend.json");  // Notez que c'est un chemin relatif à la racine du projet
      const data = await res.json();
      setAgendaData(data); // Définir les données récupérées
    };

    fetchAgenda();
  }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois après le premier rendu

  return (
    <div className="max-w-6xl justify-center mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Liste des événements</h1>
      {agendaData.length > 0 ? (
        agendaData.map((agenda, index) => (
          <DisplayAgend key={index} doc={agenda} /> // Ajout de `key` pour chaque élément dans la liste
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">Chargement des événements...</p>
      )}
    </div>
  );
}
