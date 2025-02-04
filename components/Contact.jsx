"use client";
import { useState } from "react";

export default function Contact() {
  const [events, setEvents] = useState([]); // Liste des événements
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  // Fonction pour ajouter un nouvel événement
  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time && newEvent.location) {
      setEvents([...events, { ...newEvent, id: Date.now() }]); // Ajout avec ID unique
      setNewEvent({ title: "", date: "", time: "", location: "", description: "" }); // Réinitialisation du formulaire
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">➕ Ajouter un événement</h2>

      <input
        type="text"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        placeholder="Titre de l'événement"
        className="w-full p-2 border rounded mb-2"
        required
      />

      <input
        type="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        className="w-full p-2 border rounded mb-2"
        required
      />

      <input
        type="time"
        value={newEvent.time}
        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        className="w-full p-2 border rounded mb-2"
        required
      />

      <input
        type="text"
        value={newEvent.location}
        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        placeholder="Lieu"
        className="w-full p-2 border rounded mb-2"
        required
      />

      <textarea
        value={newEvent.description}
        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        placeholder="Description (facultatif)"
        className="w-full p-2 border rounded mb-2"
      />

      <button
        onClick={addEvent}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Ajouter l'événement
      </button>

      {/* Affichage des événements ajoutés */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">📅 Événements à venir :</h3>
        {events.length > 0 ? (
          <ul className="space-y-2">
            {events.map((event) => (
              <li key={event.id} className="border p-2 rounded shadow">
                <strong>{event.title}</strong> - {event.date} à {event.time} 📍 {event.location}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Aucun événement pour l'instant.</p>
        )}
      </div>
    </div>
  );
}
