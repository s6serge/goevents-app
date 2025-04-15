import Accueil from "@/components/Accueil";

import InstallPrompt from '@/components/InstallPrompt';

export const metadata = {
  title: 'GoEvent | Accueil',
  description:
    'Bienvenue sur GoEvent, la plateforme idéale pour organiser et découvrir des événements.',
  openGraph: {
    title: 'GoEvent | Accueil',
    description:
      'Bienvenue sur GoEvent, la plateforme idéale pour organiser et découvrir des événements.',
    images: ['/logodusite1111.webp'],
  },
  manifest: '/manifest.json',
};

export default function Home() {
  return (
    <>
      <Accueil />
      <InstallPrompt />
    </>
  );
}

