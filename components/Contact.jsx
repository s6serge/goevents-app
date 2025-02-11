"use client"; // Indique que ce code s'exécute côté client

import { useState } from "react"; // Import du hook useState depuis React

// Level 1: UI Components
// Composant FormInput : champ de saisie générique pour les formulaires
const FormInput = ({ type, value, onChange, placeholder, required = false }) => (
    <input
        type={type} // Spécifie le type d'input (texte, date, heure, etc.)
        value={value} // Valeur actuelle de l'input
        onChange={onChange} // Fonction déclenchée lors du changement de valeur
        placeholder={placeholder} // Texte indicatif affiché dans l'input
        className="w-full p-2 border rounded mb-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white" // Styles CSS appliqués
        required={required} // Définit si le champ est requis
    />
);

// Composant FormTextArea : zone de texte multi-lignes pour les formulaires
const FormTextArea = ({ value, onChange, placeholder }) => (
    <textarea
        value={value} // Valeur actuelle du textarea
        onChange={onChange} // Fonction déclenchée lors du changement de contenu
        placeholder={placeholder} // Texte indicatif affiché dans le textarea
        className="w-full p-2 border rounded mb-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white" // Styles CSS appliqués
    />
);

// Level 2: Section Components
// Composant EventForm : formulaire permettant d'ajouter un nouvel événement
const EventForm = ({ newEvent, setNewEvent, addEvent }) => (
    <div>
        {/* Champ de saisie pour le titre de l'événement */}
        <FormInput
            type="text"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            placeholder="Titre de l'événement"
            required
        />
        {/* Champ de saisie pour la date de l'événement */}
        <FormInput
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
        />
        {/* Champ de saisie pour l'heure de l'événement */}
        <FormInput
            type="time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            required
        />
        {/* Champ de saisie pour le lieu de l'événement */}
        <FormInput
            type="text"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            placeholder="Lieu"
            required
        />
        {/* Zone de texte pour la description de l'événement (facultatif) */}
        <FormTextArea
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            placeholder="Description (facultatif)"
        />
        {/* Bouton de soumission pour ajouter l'événement */}
        <SubmitButton onClick={addEvent} />
    </div>
);

// Level 3: Feature Components
// Composant EventList : affiche la liste des événements ajoutés
const EventList = ({ events }) => (
    <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-light-text-darker dark:text-white">
            📅 Événements à venir :
        </h3>
        {/* Si des événements existent, affiche la liste, sinon affiche un état vide */}
        {events.length > 0 ? (
            <EventItems events={events} />
        ) : (
            <EmptyState />
        )}
    </div>
);

// Level 4: UI Elements
// Composant SubmitButton : bouton permettant de soumettre le formulaire d'ajout d'événement
const SubmitButton = ({ onClick }) => (
    <button
        onClick={onClick} // Appelle la fonction onClick lors du clic
        className="w-full bg-light-primary dark:bg-accent text-white py-2 rounded-lg 
                 hover:bg-light-primary/90 dark:hover:bg-accent/80" // Styles CSS du bouton
    >
        Ajouter l'événement
    </button>
);

// Composant EventItems : affiche chaque événement sous forme d'item dans une liste
const EventItems = ({ events }) => (
    <ul className="space-y-2">
        {events.map((event) => (
            <li key={event.id} className="border p-2 rounded shadow dark:bg-gray-800 dark:border-gray-700">
                <strong className="text-light-text-darker dark:text-white">
                    {event.title} {/* Affiche le titre de l'événement */}
                </strong> 
                - {event.date} à {event.time} 📍 {event.location} {/* Affiche la date, l'heure et le lieu */}
            </li>
        ))}
    </ul>
);

// Composant EmptyState : affiche un message lorsqu'aucun événement n'est présent
const EmptyState = () => (
    <p className="text-light-text dark:text-gray-400">
        Aucun événement pour l'instant.
    </p>
);

// Main Component
// Composant principal Contact qui gère l'ajout et l'affichage des événements
export default function Contact() {
    // Déclaration de l'état pour stocker la liste des événements
    const [events, setEvents] = useState([]);
    // Déclaration de l'état pour gérer le formulaire d'un nouvel événement
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
    });

    // Fonction pour ajouter un nouvel événement à la liste
    const addEvent = () => {
        // Vérifie que les champs obligatoires sont remplis
        if (newEvent.title && newEvent.date && newEvent.time && newEvent.location) {
            // Ajoute l'événement avec un identifiant unique généré par Date.now()
            setEvents([...events, { ...newEvent, id: Date.now() }]);
            // Réinitialise le formulaire après l'ajout de l'événement
            setNewEvent({ title: "", date: "", time: "", location: "", description: "" });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Titre de la section d'ajout d'événement */}
            <h2 className="text-xl font-semibold mb-4 text-light-primary dark:text-accent">
                ➕ Ajouter un événement
            </h2>
            {/* Affichage du formulaire pour ajouter un nouvel événement */}
            <EventForm 
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                addEvent={addEvent}
            />
            {/* Affichage de la liste des événements ajoutés */}
            <EventList events={events} />
        </div>
    );
}
