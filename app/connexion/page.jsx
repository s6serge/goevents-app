

import EspaceClient from "@/components/EspaceClient";
export const metadata = {
  metadataBase: new URL('https://acme.com'),
  title: 'GoEvent | connexion',
  description:
    'Connectez-vous à votre espace personnel pour gérer vos livres et accéder à toutes les fonctionnalités de biblio-app.',
  openGraph: {
    title: 'GoEvent | connexion',
    description:
      'Connectez-vous à votre espace personnel pour gérer vos livres et accéder à toutes les fonctionnalités de biblio-app.',
    images: ['./logodusite.webp'],
  },
};

export default function EspacePage() {
    return <EspaceClient />;
} 