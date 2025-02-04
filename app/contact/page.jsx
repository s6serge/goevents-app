// app/contact/page.jsx
// Ce composant affiche la page de contact avec les informations de contact et un formulaire de message.
export default function ContactPage() {
  return (
    // Conteneur principal :
    // - Définit une hauteur minimale pour l'écran (min-h-screen).
    // - Applique les couleurs de fond pour les modes clair (bg-gray-50) et sombre (dark:bg-gray-900).
    // - Ajoute un espacement vertical (py-12).
    // - Centre le contenu horizontalement grâce aux classes container et mx-auto, avec un padding horizontal (px-4).
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 container mx-auto px-4">
      
      {/*
        Titre de la page :
        - Texte de grande taille (text-4xl), en gras (font-bold) et centré (text-center).
        - Couleurs de texte adaptées aux modes clair et sombre.
        - Marge inférieure (mb-8) et bordure en bas (border-b) avec un padding (pb-4) pour séparer le titre du contenu.
      */}
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8 border-b pb-4">
        Contactez-Nous
      </h1>

      {/*
        Conteneur flex :
        - Dispose les sections d'informations de contact et du formulaire.
        - Sur les petits écrans, les éléments s'empilent en colonne.
        - Sur les écrans moyens et plus grands, les éléments sont affichés côte à côte (md:flex-row)
          avec un espacement horizontal (md:space-x-12).
      */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-12">
        
        {/*
          Section Informations de Contact :
          - Affiche les détails de contact (email et téléphone).
          - Occupe la moitié de la largeur sur les écrans moyens et plus grands (md:w-1/2).
          - Utilise des couleurs de texte adaptées aux modes clair et sombre.
        */}
        <section className="md:w-1/2 text-gray-800 dark:text-white">
          <h2 className="text-2xl font-semibold mb-4">Informations de Contact</h2>
          <p className="mb-4">
            Pour toute question ou demande d'information, n'hésitez pas à nous contacter. Nous sommes à votre écoute !
          </p>
          <p className="mb-2">
            <strong>Email :</strong> contact@goevents.com
          </p>
          <p>
            <strong>Téléphone :</strong> +33 787 12 13 14
          </p>
        </section>

        {/*
          Section Formulaire de Contact :
          - Contient le formulaire pour envoyer un message.
          - Stylisé comme une carte avec fond blanc (ou fond sombre en mode dark), une ombre (shadow-lg) et des coins arrondis (rounded-lg).
          - Inclut une animation de survol (hover:scale-105) pour un effet subtil.
          - Occupe également la moitié de la largeur sur les écrans moyens et plus grands (md:w-1/2).
        */}
        <form className="md:w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 transform transition hover:scale-105">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Envoyez-nous un message
          </h2>

          {/*
            Champ Nom :
            - Comprend un label associé et un champ de saisie pour le nom de l'utilisateur.
            - Stylisé avec du padding, une bordure, et des transitions lors du focus.
          */}
          <label htmlFor="nom" className="block text-gray-800 dark:text-white">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            placeholder="Votre nom"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500 transition duration-200"
          />

          {/*
            Champ Email :
            - Comprend un label et un champ de saisie pour l'adresse email.
            - Stylisé de façon similaire au champ Nom.
          */}
          <label htmlFor="email" className="block text-gray-800 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500 transition duration-200"
          />

          {/*
            Champ Message :
            - Comprend un label et une zone de texte pour le message de l'utilisateur.
            - Offre suffisamment de lignes (rows="4") pour le contenu du message.
            - Stylisé de façon cohérente avec les autres champs.
          */}
          <label htmlFor="message" className="block text-gray-800 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Votre message"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500 transition duration-200"
          ></textarea>

          {/*
            Bouton Envoyer :
            - Bouton de soumission sur toute la largeur avec un fond bleu qui s'assombrit au survol.
            - Coins arrondis et transition fluide pour une meilleure interaction.
          */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
