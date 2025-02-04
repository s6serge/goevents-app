// app/documents/page.jsx
import Link from 'next/link';

// Page "Documents" améliorée avec une meilleure réactivité et un design moderne
export default function DocumentsPage() {
  // Tableau de données pour les documents
  const documents = [
    {
      title: "Planning de l'événement",
      description: "Découvrez l'agenda complet de l'événement avec les horaires et activités.",
      link: "/documents/planning.pdf", // Assurez-vous que ce fichier existe dans public/documents
    },
    {
      title: "Communiqué de presse",
      description: "Accédez au communiqué de presse officiel et aux informations médias.",
      link: "/documents/communique.pdf", // Assurez-vous que ce fichier existe dans public/documents
    },
    {
      title: "Brochure",
      description: "Consultez la brochure pour en savoir plus sur l'événement et ses activités.",
      link: "/documents/brochure.pdf", // Assurez-vous que ce fichier existe dans public/documents
    },
    {
      title: "Programme détaillé",
      description: "Un aperçu détaillé du programme pour chaque journée de l'événement.",
      link: "/documents/programme.pdf", // Assurez-vous que ce fichier existe dans public/documents
    },
    // Ajoutez d'autres documents ici si nécessaire
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 min-h-screen">
      {/* Conteneur principal centré */}
      <div className="container mx-auto px-4">
        {/* Titre de la page avec animation */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 animate-fadeInUp">
          Documents
        </h1>
        {/* Grille responsive améliorée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
            >
              {/* Conteneur de contenu du document */}
              <div className="p-6">
                {/* Titre du document */}
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                  {doc.title}
                </h2>
                {/* Description du document */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {doc.description}
                </p>
                {/* Lien de téléchargement stylé */}
                <Link
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
                >
                  Télécharger
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
