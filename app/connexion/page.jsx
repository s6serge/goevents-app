

import EspaceClient from "@/components/EspaceClient";
export const metadata = {
  title: 'GoEvent | connexion',
  description:
    'Connectez-vous à votre espace personnel pour gérer vos livres et accéder à toutes les fonctionnalités de biblio-app.',
  openGraph: {
    title: 'GoEvent | connexion',
    description:
      'Connectez-vous à votre espace personnel pour gérer vos livres et accéder à toutes les fonctionnalités de biblio-app.',
    images: ['./react.webp'],
  },
};

export default function EspacePage() {
    return <EspaceClient />;
} 