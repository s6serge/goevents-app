"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

/**
 * Composant ContactInput
 * Représente un champ de formulaire (input) avec label et gestion du focus/hover.
 */
function ContactInput({ label, type = "text", value, onChange, required = false }) {
  return (
    <div className="mb-4 group">
      {/* Label du champ */}
      <label className="block mb-1 text-light-text-darker dark:text-white font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {/* Champ input avec effets de hover/focus */}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border rounded 
                   dark:bg-gray-800 dark:border-gray-700 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-light-primary 
                   dark:focus:ring-accent transition-shadow
                   hover:shadow-md hover:border-light-primary dark:hover:border-accent"
      />
    </div>
  );
}

/**
 * Composant ContactTextArea
 * Zone de texte (textarea) avec label, hover/focus et styles communs.
 */
function ContactTextArea({ label, value, onChange }) {
  return (
    <div className="mb-4 group">
      <label className="block mb-1 text-light-text-darker dark:text-white font-medium">
        {label}
      </label>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border rounded 
                   dark:bg-gray-800 dark:border-gray-700 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-light-primary 
                   dark:focus:ring-accent transition-shadow
                   hover:shadow-md hover:border-light-primary dark:hover:border-accent"
      />
    </div>
  );
}

/**
 * Page de contact
 * - Mise en page : Deux colonnes (gauche : infos, droite : formulaire)
 * - Fond gris clair en mode clair, gris foncé en mode sombre
 * - Animations d'apparition (fadeIn), de translation (fadeInLeft, fadeInRight)
 * - Effets hover sur les champs et sur les icônes
 */
export default function Contact() {
  // État local pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /**
   * Met à jour le champ correspondant dans l'état local.
   * @param {string} key - Le nom du champ à mettre à jour.
   * @param {string} val - La nouvelle valeur du champ.
   */
  const handleChange = (key, val) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  /**
   * Gère la soumission du formulaire : affiche les données dans la console,
   * puis réinitialise tous les champs.
   * @param {object} e - L'événement de soumission (submit).
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    // Réinitialise les champs
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      {/* Conteneur principal (animation fadeIn) */}
      <div
        className="max-w-6xl w-full mx-auto my-12 px-4 sm:px-6 md:px-8 
                   bg-white dark:bg-gray-800 rounded-lg shadow-lg md:flex
                   animate-[fadeIn_0.4s_ease-out]"
      >
        {/* Colonne gauche (infos), animation depuis la gauche */}
        <div
          className="w-full md:w-2/5 p-6 border-b md:border-b-0 md:border-r 
                     border-gray-200 dark:border-gray-700
                     animate-[fadeInLeft_0.4s_ease-out]"
        >
          <h1 className="text-3xl font-bold mb-4 text-light-primary dark:text-accent">
            Contactez Nous
          </h1>
          <p className="text-light-text dark:text-gray-300 mb-6">
            Une question, un souci ou simplement envie de dire bonjour ?
            N’hésitez pas à nous contacter.
          </p>
          {/* Informations de contact avec icônes (hover scale) */}
          <div className="space-y-4 text-light-text dark:text-gray-300">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <FaMapMarkerAlt className="text-light-primary dark:text-accent" />
              <span>123 Rue des Événements, Montreal, H1T 2P9</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <FaPhoneAlt className="text-light-primary dark:text-accent" />
              <span>+1 514-515-5253</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <FaEnvelope className="text-light-primary dark:text-accent" />
              <span>contact@goevents.com</span>
            </div>
          </div>
        </div>

        {/* Colonne droite (formulaire), animation depuis la droite */}
        <div
          className="w-full md:w-3/5 p-6
                     animate-[fadeInRight_0.4s_ease-out]"
        >
          <h2 className="text-xl font-semibold mb-4 text-light-text-darker dark:text-white">
            Envoyez-nous un message
          </h2>
          <form onSubmit={handleSubmit}>
            <ContactInput
              label="Nom"
              value={formData.name}
              onChange={(val) => handleChange("name", val)}
              required
            />
            <ContactInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(val) => handleChange("email", val)}
              required
            />
            <ContactInput
              label="Téléphone"
              type="tel"
              value={formData.phone}
              onChange={(val) => handleChange("phone", val)}
            />
            <ContactTextArea
              label="Message"
              value={formData.message}
              onChange={(val) => handleChange("message", val)}
            />

            <button
              type="submit"
              className="w-full mt-4 bg-light-primary dark:bg-accent text-white 
                         py-3 px-4 rounded hover:bg-light-primary/90
                         dark:hover:bg-accent/90 transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
