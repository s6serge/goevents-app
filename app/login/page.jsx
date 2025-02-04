import GoEventLogo from '../../components/GoEventLogo';

// Ce composant affiche la page de connexion avec un formulaire pour l'utilisateur,
// et intègre le logo "GoEvent" en haut pour renforcer l'identité visuelle.
export default function LoginPage() {
  return (
    // Niveau 1 : Conteneur principal de la page
    // - Ajoute un padding vertical (py-8), définit les couleurs de fond pour les modes clair et sombre,
    //   et impose une hauteur minimale pour occuper toute la fenêtre (min-h-screen).
    // - Utilise flex pour centrer verticalement le contenu.
    <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      
      {/*
        Niveau 2 : Carte de connexion
        - Centre horizontalement la carte (mx-auto) et limite sa largeur maximale (max-w-md).
        - Applique un fond blanc (ou sombre en mode dark), une ombre (shadow-lg) et des coins arrondis (rounded-lg).
        - Ajoute un padding intérieur (p-6) pour espacer le contenu.
      */}
      <div className="mx-auto px-4 max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        
        {/*
          Niveau 3 : Conteneur du logo
          - Affiche le logo "GoEvent" centré en haut de la carte.
          - La marge inférieure (mb-4) sépare le logo du reste du contenu.
        */}
        <div className="flex justify-center mb-4">
          <GoEventLogo />
        </div>

        {/*
          Niveau 3 : Titre de la page de connexion
          - Texte de grande taille, en gras et centré.
          - Marge inférieure (mb-6) pour séparer le titre du formulaire.
        */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Connexion
        </h1>
        
        {/*
          Niveau 3 : Formulaire de connexion
          - Permet à l'utilisateur de saisir son email et son mot de passe.
          - Les éléments internes (labels, inputs, bouton) restent au niveau 4.
        */}
        <form>
          {/*
            Niveau 4 : Champ Email
            - Label associé et champ de saisie pour l'adresse email.
            - Les marges (mb-1 pour le label et mb-4 pour l'input) assurent un espacement harmonieux.
          */}
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Votre email"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500 mb-4"
          />
          
          {/*
            Niveau 4 : Champ Mot de passe
            - Label associé et champ de saisie pour le mot de passe.
            - Les marges garantissent un espacement cohérent.
          */}
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 mb-1">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            placeholder="Votre mot de passe"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500 mb-6"
          />
          
          {/*
            Niveau 4 : Bouton de soumission
            - Bouton sur toute la largeur avec un fond bleu qui s'assombrit au survol.
            - Transition fluide pour une meilleure interaction.
          */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-300"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
