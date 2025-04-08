
import InstallPrompt from '@/components/InstallPrompt';
import Contact from "@/components/Contact";
export const metadata = {
  title: 'GoEvent | Ajout-evenement',
  description:
    'Ajoutez facilement un nouvel événement à votre bibliothèque avec biblio-app.',
  openGraph: {
    title: 'GoEvent | Ajout-evenement',
    description:
      'Ajoutez facilement un nouvel événement à votre bibliothèque avec biblio-app.',
    images: ['./react.webp'],
  },
  manifest: '/manifest.json',
};

export default function ContactPage() {
    return (
      <>
        <Contact />
        <InstallPrompt />
      </>
    );
} 