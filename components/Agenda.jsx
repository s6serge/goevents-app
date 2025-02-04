"use client";
import { useEffect, useState } from "react";
import DisplayAgend from "./DisplayAgend";

export default function Agenda() {
  const [agendaData, setAgendaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Gestion des erreurs

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const res = await fetch("/json/Agend.json"); // Vérifier que le fichier est bien dans `public/json/`
        if (!res.ok) throw new Error("Erreur lors du chargement des événements");
        
        const data = await res.json();
        setAgendaData(data);
      } catch (err) {
        console.error("Erreur de chargement :", err);
        setError("Impossible de charger les événements. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    fetchAgenda();
  }, []);

  


  return (
    <div className="max-w-6xl mx-auto p-4">







      <h1 className="text-3xl font-bold text-center my-8">Liste des événements</h1>

      {loading ? (
        <p className="text-center text-lg text-gray-500">Chargement des événements...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : agendaData.length > 0 ? (
        agendaData.map((agenda) => (
          <DisplayAgend key={agenda.id || agenda.title} doc={agenda} />
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">Aucun événement disponible.</p>
      )}
    </div>
  );
}
