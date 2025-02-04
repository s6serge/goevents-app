// app/documents/page.jsx
import Link from 'next/link';

// Composant de la page "Documents"
export default function DocumentsPage() {
  // Données d'exemple pour les documents
  const documents = [
    {
      title: "Planning de l'événement",
      description: "Un agenda détaillé pour l'événement.",
      link: "/documents/planning.pdf", // Assurez-vous que ce fichier existe dans le dossier public/documents
    },
    {
      title: "Communiqué de presse",
      description: "Communiqué de presse officiel et kit média.",
      link: "/documents/communique.pdf", // Assurez-vous que ce fichier existe dans le dossier public/documents
    },
    {
      title: "Brochure",
      description: "En savoir plus sur notre événement grâce à cette brochure.",
      link: "/documents/brochure.pdf", // Assurez-vous que ce fichier existe dans le dossier public/documents
    },
    // Ajoutez d'autres documents si nécessaire
  ];

  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Conteneur principal centré */}
      <div className="container mx-auto px-4">
        {/* Titre de la page */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Documents
        </h1>
        {/* Grille responsive pour l'affichage des documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col"
            >
              {/* Titre du document */}
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {doc.title}
              </h2>
              {/* Description du document */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {doc.description}
              </p>
              {/* Lien de téléchargement */}
              <Link
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
              >
                Télécharger
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
