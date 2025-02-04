// app/contact/page.jsx
export default function ContactPage() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        {/* Conteneur principal centré */}
        <div className="container mx-auto px-4">
          {/* Titre principal de la page */}
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Contactez-Nous
          </h1>
          {/* Disposition en colonne sur mobile, en deux colonnes sur grand écran */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-12">
            {/* Section d'informations de contact */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Informations de Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pour toute question ou demande d'information, n'hésitez pas à nous contacter. Nous sommes à votre écoute !
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Email :</strong> contact@goevents.com<br />
                <strong>Téléphone :</strong> +33 787 12 13 14 
              </p>
            </div>
            {/* Section du formulaire de contact */}
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Envoyez-nous un message
                </h2>
                <form className="space-y-4">
                  {/* Champ pour le nom */}
                  <div>
                    <label htmlFor="nom" className="block text-gray-800 dark:text-white mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  {/* Champ pour l'email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-800 dark:text-white mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                      placeholder="Votre email"
                    />
                  </div>
                  {/* Champ pour le message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-800 dark:text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                      rows="4"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  