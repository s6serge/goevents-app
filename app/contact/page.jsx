

import Contact from "@/components/Contact";
export const metadata = {
  metadataBase: new URL('https://acme.com'),
  title: 'GoEvent | Ajout-evenement',
  description:
    'Ajoutez facilement un nouvel événement à votre bibliothèque avec biblio-app.',
  openGraph: {
    title: 'GoEvent | Ajout-evenement',
    description:
      'Ajoutez facilement un nouvel événement à votre bibliothèque avec biblio-app.',
    images: ['./logodusite.webp'],
  },
};

export default function ContactPage() {
    return <Contact />;
} 