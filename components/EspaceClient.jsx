'use client';
import { useState } from "react";

export default function EspaceClient() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log("Inscription avec :", email, password);
      // Logique d'inscription ici
    } else {
      console.log("Connexion avec :", email, password);
      // Logique de connexion ici
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {isRegistering ? "Créer un compte" : "Connexion"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre email"
          />
        </div>

        {/* Champ Mot de passe */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre mot de passe"
          />
        </div>

        {/* Bouton de soumission */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            {isRegistering ? "Créer un compte" : "Se connecter"}
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        {/* Permet de basculer entre le mode connexion et inscription */}
        <p className="text-sm">
          {isRegistering ? "Vous avez déjà un compte ? " : "Pas de compte ? "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-500 hover:underline"
          >
            {isRegistering ? "Se connecter" : "Créer un compte"}
          </button>
        </p>
      </div>
    </div>
  );
}
